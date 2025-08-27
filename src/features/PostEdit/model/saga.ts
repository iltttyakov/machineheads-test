import { IFieldError, Routes } from '@shared/lib'
import { message } from 'antd'
import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'

import { getPostDetail, updatePost } from '@/entities/Post'

import {
  getPostDetailFailure,
  getPostDetailSuccess,
  updatePostFailure,
  updatePostSuccess,
} from './actions'
import {
  GET_DETAIL_REQUEST,
  UPDATE_REQUEST,
} from './actionTypes'

// Получение поста
function* getDetailSaga(action: any): Generator {
  try {
    const post = yield call(getPostDetail, action.payload)
    yield put(getPostDetailSuccess(post))
  } catch (error: any) {
    message.error(error.message || 'Ошибка при получении поста')
    yield put(getPostDetailFailure())
  }
}

// Редактирование поста
function* updateSaga(action: any): Generator {
  try {
    yield call(updatePost, action.payload)
    yield put(updatePostSuccess())

    yield put(push(Routes.Posts))
  } catch (error: any) {

    const fieldsErrors: IFieldError[] = error.response?.status === 422
      ? error.response?.data ?? []
      : []

    message.error(error.message || 'Ошибка при изменении поста')
    yield put(updatePostFailure({ fieldsErrors }))
  }
}

export function* postEditSaga() {
  yield takeLatest(GET_DETAIL_REQUEST, getDetailSaga)
  yield takeLatest(UPDATE_REQUEST, updateSaga)
}
