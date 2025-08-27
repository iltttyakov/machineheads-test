import { authorDeleteReducer } from './reducer'
import { authorDeleteSaga } from './saga'

export function getAuthorDeleteModule() {
  return {
    id: 'authorDelete',
    reducerMap: {
      authorDelete: authorDeleteReducer,
    },
    sagas: [authorDeleteSaga],
  }
}
