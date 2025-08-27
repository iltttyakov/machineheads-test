import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'

import {
  clearTokens, generateTokens,
  getAccessToken,
  getRefreshToken,
  refreshTokens,
} from '@/shared/lib'

import {
  checkAuthFailure,
  checkAuthSuccess, loginFailure,
  loginSuccess } from './actions'
import {
  CHECK_AUTH_REQUEST, LOGIN_REQUEST, LOGOUT,
} from './actionTypes'

// Проверка авторизации при старте
function* checkAuthSaga() {
  try {
    const accessToken = getAccessToken()

    if (accessToken) {
      yield put(checkAuthSuccess())

      return
    }

    const refreshToken = getRefreshToken()
    if (refreshToken) {
      yield call(refreshTokens)
      yield put(checkAuthSuccess())

      return
    }

    // нет токенов
    yield put(checkAuthFailure())
    yield put(push('/login'))
  } catch (e: any) {
    yield call(clearTokens)
    yield put(checkAuthFailure())
    yield put(push('/login'))
  }
}

// Логин
function* generateTokensSaga(action: any) {
  try {
    const { email, password } = action.payload
    yield call(generateTokens, email, password)
    yield put(loginSuccess())
    yield put(push('/'))
  } catch (e: any) {
    yield put(loginFailure(e?.response?.data?.message || 'Ошибка авторизации'))
  }
}

// Логаут
function* logoutSaga() {
  yield call(clearTokens)
  yield put(push('/login'))
}

export function* authSaga() {
  yield takeLatest(CHECK_AUTH_REQUEST, checkAuthSaga)
  yield takeLatest(LOGIN_REQUEST, generateTokensSaga)
  yield takeLatest(LOGOUT, logoutSaga)
}
