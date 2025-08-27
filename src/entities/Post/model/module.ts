import { postsReducer } from './reducer'
import { postsSaga } from './saga'

export function getPostsModule() {
  return {
    id: 'posts',
    reducerMap: {
      posts: postsReducer,
    },
    sagas: [postsSaga],
  }
}
