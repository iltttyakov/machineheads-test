import { createPost } from '@entities/Post'
import { IFieldError, Routes } from '@shared/lib'
import { message } from 'antd'
import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'

import { createPostFailure, createPostSuccess } from './actions'
import { CREATE_REQUEST } from './actionTypes'

function* createSaga(action: any): any {
  try {
    yield call(createPost, action.payload)
    yield put(createPostSuccess())

    message.success('Пост создан')
    yield put(push(Routes.Posts))
  } catch (error: any) {
    const fieldsErrors: IFieldError[] = error.response?.status === 422
      ? error.response?.data ?? []
      : []

    message.error(error.message || 'Ошибка при создании поста')
    yield put(createPostFailure({ fieldsErrors }))
  }
}

export function* postCreateSaga() {
  yield takeLatest(CREATE_REQUEST, createSaga)
}
