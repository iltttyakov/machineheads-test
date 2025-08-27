import { tagsReducer } from './reducer'
import { tagsSaga } from './saga'

export function getTagsModule() {
  return {
    id: 'tags',
    reducerMap: {
      tags: tagsReducer,
    },
    sagas: [tagsSaga],
  }
}
