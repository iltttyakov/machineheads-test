import {
  CHECK_AUTH_FAILURE,
  CHECK_AUTH_REQUEST, CHECK_AUTH_SUCCESS, LOGIN_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT,
} from './actionTypes'

export interface IAuthState {
    checking: boolean
    loggingLoading: boolean
    isAuthenticated: boolean
}

const initialState: IAuthState = {
  checking: true,
  loggingLoading: false,
  isAuthenticated: false,
}

export const authReducer = (state = initialState, action: any): IAuthState => {
  switch (action.type) {

  case CHECK_AUTH_REQUEST:
    return { ...state, checking: true }
  case CHECK_AUTH_SUCCESS:
    return { ...state, checking: false, isAuthenticated: true }
  case CHECK_AUTH_FAILURE:
    return { ...state, checking: false, isAuthenticated: false }

  case LOGIN_REQUEST:
    return { ...state, loggingLoading: true }
  case LOGIN_SUCCESS:
    return { ...state, loggingLoading: false, isAuthenticated: true }
  case LOGIN_FAILURE:
    return { ...state, loggingLoading: false, isAuthenticated: false }

  case LOGOUT:
    return { ...state, isAuthenticated: false }

  default:
    return state
  }
}
