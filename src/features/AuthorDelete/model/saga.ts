import { message } from 'antd'
import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'

import { deleteAuthor } from '@/entities/Author'

import {
  deleteAuthorFailure,
  deleteAuthorSuccess,
} from './actions'
import { DELETE_REQUEST } from './actionTypes'

function* deleteSaga(action: any) {
  try {
    yield call(deleteAuthor, action.payload)
    yield put(deleteAuthorSuccess())
    yield put(push('/authors'))
  } catch (error: any) {
    message.error(error.message || 'Ошибка при удалении автора')
    yield put(deleteAuthorFailure())
  }
}

export function* authorDeleteSaga() {
  yield takeLatest(DELETE_REQUEST, deleteSaga)
}
