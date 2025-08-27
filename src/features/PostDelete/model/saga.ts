import { message } from 'antd'
import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'

import { deletePost } from '@/entities/Post/api'

import {
  deletePostFailure,
  deletePostSuccess,
} from './actions'
import { DELETE_REQUEST } from './actionTypes.ts'

function* deleteSaga(action: any) {
  try {
    yield call(deletePost, action.payload)
    yield put(deletePostSuccess())
    yield put(push('/posts'))
  } catch (error: any) {
    message.error(error.message || 'Ошибка при удалении поста')
    yield put(deletePostFailure())
  }
}

export function* postDeleteSaga() {
  yield takeLatest(DELETE_REQUEST, deleteSaga)
}
