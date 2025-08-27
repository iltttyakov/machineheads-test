import { getPostsList } from '@entities/Post'
import { message } from 'antd'
import { call, put, takeLatest } from 'redux-saga/effects'

import { getPostsListFailure, getPostsListSuccess} from './actions.ts'
import { GET_LIST_REQUEST } from './actionTypes'

function* getListSaga(action: any): Generator {
  try {
    const { page } = action.payload
    const res = yield call(getPostsList, page)

    yield put(
      getPostsListSuccess({
        posts: res.data,
        currentPage: res.currentPage,
        totalPages: res.pageCount,
      }),
    )

  } catch (error: any) {
    message.error(error.message)
    yield put(getPostsListFailure())
  }
}

export function* postsSaga() {
  yield takeLatest(GET_LIST_REQUEST, getListSaga)
}
