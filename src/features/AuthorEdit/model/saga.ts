import { getAuthorDetail, IUpdateAuthorPayload, updateAuthor } from '@entities/Author'
import { IFieldError } from '@shared/lib'
import { message } from 'antd'
import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'

import {
  getAuthorDetailFailure,
  getAuthorDetailSuccess,
  updateAuthorFailure,
  updateAuthorSuccess,
} from './actions'
import {
  GET_DETAIL_REQUEST,
  UPDATE_REQUEST,
} from './actionTypes'

// Получение автора
function* getDetailSaga(action: any): Generator {
  try {
    const author = yield call(getAuthorDetail, action.payload)
    yield put(getAuthorDetailSuccess(author))
  } catch (error: any) {
    message.error(error.message || 'Ошибка при получении автора')
    yield put(getAuthorDetailFailure())
  }
}

// Обновление автора
function* updateSaga(action: any) {
  try {
    const payload: IUpdateAuthorPayload = action.payload
    yield call(updateAuthor, payload)
    yield put(updateAuthorSuccess())
    yield put(push('/authors'))
  } catch (error: any) {

    const fieldsErrors: IFieldError[] = error.response?.status === 422
      ? error.response?.data ?? []
      : []

    message.error(error.message || 'Ошибка при изменении автора')
    yield put(updateAuthorFailure({ fieldsErrors }))
  }
}

export function* authorEditSaga() {
  yield takeLatest(GET_DETAIL_REQUEST, getDetailSaga)
  yield takeLatest(UPDATE_REQUEST, updateSaga)
}
