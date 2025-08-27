import { postCreateReducer } from './reducer'
import { postCreateSaga } from './saga'

export function getPostCreateModule() {
  return {
    id: 'postCreate',
    reducerMap: {
      postCreate: postCreateReducer,
    },
    sagas: [postCreateSaga],
  }
}
