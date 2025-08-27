import { authorsReducer } from './reducer'
import { authorsSaga } from './saga'

export function getAuthorsModule() {
  return {
    id: 'authors',
    reducerMap: {
      authors: authorsReducer,
    },
    sagas: [authorsSaga],
  }
}
