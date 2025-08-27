import { getAuthorsList, IAuthorListItem } from '@entities/Author'
import { message } from 'antd'
import { call, put, takeLatest } from 'redux-saga/effects'

import {
  getAuthorsListFailure,
  getAuthorsListSuccess,
} from './actions'
import { GET_LIST_REQUEST } from './actionTypes'

/** Загрузка списка авторов */
function* getListSaga() {
  try {
    const authors: IAuthorListItem[] = yield call(getAuthorsList)
    yield put(getAuthorsListSuccess(authors))
  } catch (error: any) {
    message.error(error.message || 'Ошибка при загрузке авторов')
    yield put(getAuthorsListFailure())
  }
}

export function* authorsSaga() {
  yield takeLatest(GET_LIST_REQUEST, getListSaga)
}
