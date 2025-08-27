import { createAuthor, ICreateAuthorPayload } from '@entities/Author'
import { IFieldError } from '@shared/lib'
import { message } from 'antd'
import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'

import {
  createAuthorFailure,
  createAuthorSuccess,
} from './actions'
import { CREATE_REQUEST } from './actionTypes'

function* createSaga(action: any) {
  try {
    const payload: ICreateAuthorPayload = action.payload

    yield call(createAuthor, payload)
    yield put(createAuthorSuccess())

    message.success('Автор создан')

    yield put(push('/authors'))

  } catch (error: any) {

    const fieldsErrors: IFieldError[] = error.response?.status === 422
      ? error.response?.data ?? []
      : []

    message.error(error.message || 'Ошибка при создании автора')
    yield put(createAuthorFailure({ fieldsErrors }))
  }
}

export function* authorCreateSaga() {
  yield takeLatest(CREATE_REQUEST, createSaga)
}
