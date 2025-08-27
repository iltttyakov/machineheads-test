import { authReducer } from './reducer'
import { authSaga } from './saga'

export function getAuthModule() {
  return {
    id: 'auth',
    reducerMap: {
      auth: authReducer,
    },
    sagas: [authSaga],
  }
}
