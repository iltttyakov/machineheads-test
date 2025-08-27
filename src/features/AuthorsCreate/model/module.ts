import { authorCreateReducer } from './reducer'
import { authorCreateSaga } from './saga'

export function getAuthorCreateModule() {
  return {
    id: 'authorCreate',
    reducerMap: {
      authorCreate: authorCreateReducer,
    },
    sagas: [authorCreateSaga],
  }
}
