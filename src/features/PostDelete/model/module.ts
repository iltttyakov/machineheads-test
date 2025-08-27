import { postDeleteReducer } from './reducer'
import { postDeleteSaga } from './saga'

export function getPostDeleteModule() {
  return {
    id: 'postDelete',
    reducerMap: {
      postDelete: postDeleteReducer,
    },
    sagas: [postDeleteSaga],
  }
}
