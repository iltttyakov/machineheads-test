import {
  CHECK_AUTH_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from './actionTypes'

export const checkAuthRequest = () => ({ type: CHECK_AUTH_REQUEST })
export const checkAuthSuccess = () => ({ type: CHECK_AUTH_SUCCESS })
export const checkAuthFailure = () => ({ type: CHECK_AUTH_FAILURE })

export const loginRequest = (email: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
})
export const loginSuccess = () => ({ type: LOGIN_SUCCESS })
export const loginFailure = (error: string) => ({ type: LOGIN_FAILURE, payload: error })

export const logout = () => ({ type: LOGOUT })
