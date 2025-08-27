import { postEditReducer } from './reducer'
import { postEditSaga } from './saga'

export function getPostEditModule() {
  return {
    id: 'postEdit',
    reducerMap: {
      postEdit: postEditReducer,
    },
    sagas: [postEditSaga],
  }
}
