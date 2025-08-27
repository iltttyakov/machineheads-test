import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

const BASE_URL = 'https://rest-test.machineheads.ru'
const ACCESS_COOKIE = 'access_token'
const REFRESH_COOKIE = 'refresh_token'

export interface IGenerateTokensResponse {
    access_token: string
    refresh_token: string
    access_expired_at: number
    refresh_expired_at: number
}

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
})

/** Достаёт access_token из куков */
export const getAccessToken = () => Cookies.get(ACCESS_COOKIE)

/** Достаёт refresh_token из куков */
export const getRefreshToken = () => Cookies.get(REFRESH_COOKIE)

/** Сохраняет новые токены в куки */
const saveTokens = (params: {
    accessToken: string
    refreshToken: string
    accessExpiredAt: number
    refreshExpiredAt: number
}) => {
  Cookies.set(ACCESS_COOKIE, params.accessToken, {
    expires: new Date(params.accessExpiredAt * 1000),
    secure: true,
    sameSite: 'strict',
  })

  Cookies.set(REFRESH_COOKIE, params.refreshToken, {
    expires: new Date(params.refreshExpiredAt * 1000),
    secure: true,
    sameSite: 'strict',
  })
}

/** Удаляет access и refresh токены из cookies */
export const clearTokens = () => {
  Cookies.remove(ACCESS_COOKIE)
  Cookies.remove(REFRESH_COOKIE)
}

/** Генерирует токены по email и паролю */
export const generateTokens = async (email: string, password: string) => {
  const formData = new FormData()
  formData.append('email', email)
  formData.append('password', password)

  const { data } = await axios.post<IGenerateTokensResponse>(
    `${BASE_URL}/auth/token-generate`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  )

  saveTokens({
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    accessExpiredAt: data.access_expired_at,
    refreshExpiredAt: data.refresh_expired_at,
  })

  return data
}

/** Обновляет токены по refresh_token */
export const refreshTokens = async () => {
  const refreshToken = getRefreshToken()
  if (!refreshToken) {
    window.location.href = '/login'

    return
  }

  try {
    const formData = new FormData()
    formData.append(REFRESH_COOKIE, refreshToken)

    const { data } = await axios.post(
      `${BASE_URL}/auth/token-refresh`,
      formData,
    )

    saveTokens({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      accessExpiredAt: data.access_expired_at,
      refreshExpiredAt: data.refresh_expired_at,
    })
  } catch (error) {
    console.error('Token refresh failed', error)
    clearTokens()
    window.location.href = '/login'

    return Promise.reject(error)
  }
}

// Подставляет access_token в заголовки
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = getAccessToken()
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

// Промис для хранения текущего процесса обновления токена
// null означает, что обновление сейчас не происходит
let refreshPromise: Promise<void> | null = null

api.interceptors.response.use(
  response => response,

  async (error) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

    if (axios.isAxiosError(error) && error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      // Первый запрос с 401 запускает обновление токена
      if (!refreshPromise) {
        refreshPromise = refreshTokens().finally(() => {
          // После завершения обновления токена сбрасывает refreshPromise
          refreshPromise = null
        })
      }

      try {
        // Если сейчас выполняется обновление токена (refreshPromise существует) ждёт его завершения
        await refreshPromise

        const accessToken = getAccessToken()
        if (accessToken && originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`
        }

        return await api(originalRequest)
      } catch (err) {
        clearTokens()
        window.location.href = '/login'

        return Promise.reject(err)
      }
    }

    return Promise.reject(error)
  },
)

export { api }
