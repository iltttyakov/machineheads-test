import { checkAuthRequest } from '@features/Auth'
import { Routes } from '@shared/lib'
import { PageSpin } from '@shared/ui'
import { ConnectedRouter } from 'connected-react-router'
import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import { AdminLayout } from '@/widgets'

import { history, RootState } from './store'

const LoginPage = lazy(() => import('@pages/LoginPage'))
const PostsPage = lazy(() => import('@pages/PostsPage'))
const PostCreatePage = lazy(() => import('@pages/PostCreatePage'))
const PostEditPage = lazy(() => import('@pages/PostEditPage'))
const TagsPage = lazy(() => import('@pages/TagsPage'))
const AuthorCreatePage = lazy(() => import('@pages/AuthorCreatePage'))
const AuthorEditPage = lazy(() => import('@pages/AuthorEditPage'))
const AuthorsPage = lazy(() => import('@pages/AuthorsPage'))

export const App: React.FC = () => {
  const dispatch = useDispatch()
  const { checking, isAuthenticated } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(checkAuthRequest())
  }, [dispatch])

  if (checking) return <PageSpin />

  return (
    <ConnectedRouter history={history}>
      <Suspense
        fallback={<PageSpin />}
      >
        <Switch>
          <Route path="/login">
            {
              isAuthenticated
                ? <Redirect to="/" />
                : <LoginPage />
            }
          </Route>

          <Route path="/">
            {
              isAuthenticated
                ? (
                  <AdminLayout>
                    <Switch>
                      <Route
                        exact
                        path={Routes.Posts}
                        component={PostsPage}
                      />
                      <Route
                        path={Routes.PostCreate}
                        component={PostCreatePage}
                      />
                      <Route
                        path={`${Routes.PostEdit}:id`}
                        component={PostEditPage}
                      />
                      <Route
                        path={Routes.Tags}
                        component={TagsPage}
                      />
                      <Route
                        path={Routes.AuthorCreate}
                        component={AuthorCreatePage}
                      />
                      <Route
                        path={`${Routes.AuthorEdit}:id`}
                        component={AuthorEditPage}
                      />
                      <Route
                        path={Routes.Authors}
                        component={AuthorsPage}
                      />
                      <Redirect to={Routes.Posts} />
                    </Switch>
                  </AdminLayout>
                )
                : <Redirect to={Routes.Login} />
            }
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  )
}
