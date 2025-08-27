import { authorEditReducer } from './reducer'
import { authorEditSaga } from './saga'

export function getAuthorEditModule() {
  return {
    id: 'authorEdit',
    reducerMap: {
      authorEdit: authorEditReducer,
    },
    sagas: [authorEditSaga],
  }
}
