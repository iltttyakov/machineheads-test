import { getAuthorsModule, IAuthorsState } from '@entities/Author'
import { IPostsState } from '@entities/Post'
import { getTagsModule, ITagsState } from '@entities/Tag'
import { getAuthModule, IAuthState } from '@features/Auth'
import { IAuthorDeleteState } from '@features/AuthorDelete'
import { IAuthorEditState } from '@features/AuthorEdit'
import { IAuthorCreateState } from '@features/AuthorsCreate'
import { IPostCreateState } from '@features/PostCreate'
import { IPostDeleteState } from '@features/PostDelete'
import { IPostEditState } from '@features/PostEdit'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createStore, IModuleStore } from 'redux-dynamic-modules'
import { getSagaExtension } from 'redux-dynamic-modules-saga'

export interface RootState {
    authors: IAuthorsState,
    posts: IPostsState,
    tags: ITagsState,
    auth: IAuthState,
    authorDelete: IAuthorDeleteState,
    authorEdit: IAuthorEditState,
    authorCreate: IAuthorCreateState,
    postCreate: IPostCreateState,
    postDelete: IPostDeleteState,
    postEdit: IPostEditState,
}

export const history = createBrowserHistory()

export const getRouterModule = () => ({
  id: 'router',
  reducerMap: {
    router: connectRouter(history),
  },
})

export function configureStore(): IModuleStore<RootState> {
  const store = createStore<RootState>({
    initialState: {},
    extensions: [
      getSagaExtension(),
      {
        middleware: [routerMiddleware(history)],
      },
    ],
  })

  store.addModules([
    getRouterModule(),
    getAuthorsModule(),
    getAuthModule(),
    getTagsModule(),
  ])

  return store
}
