import {
  createTag,
  deleteTag,
  getTagsList,
  getTagsListFailure,
  getTagsListRequest,
  ITagListItem,
  updateTag } from '@entities/Tag'
import { IFieldError } from '@shared/lib'
import { message } from 'antd'
import { call, put, takeLatest } from 'redux-saga/effects'

import {
  createTagFailure,
  createTagSuccess,
  deleteTagFailure,
  deleteTagSuccess,
  getTagsListSuccess,
  updateTagFailure,
  updateTagSuccess,
} from './actions'
import {
  CREATE_REQUEST,
  DELETE_REQUEST,
  GET_LIST_REQUEST,
  UPDATE_REQUEST,
} from './actionTypes'

/** Загрузка списка тегов */
function* getListSaga() {
  try {
    const tags: ITagListItem[] = yield call(getTagsList)
    yield put(getTagsListSuccess(tags))
  } catch (error: any) {
    yield put(getTagsListFailure())
  }
}

/** Создание тега */
function* createSaga(action: any) {
  try {
    yield call(createTag, action.payload)
    yield put(createTagSuccess())
    yield put(getTagsListRequest())
  } catch (error: any) {
    const fieldsErrors: IFieldError[] = error.response?.status === 422
      ? error.response?.data ?? []
      : []
    yield put(createTagFailure({ fieldsErrors }))
  }
}

/** Редактирование тега */
function* updateSaga(action: any) {
  try {
    yield call(updateTag, { id: action.payload.id, name: action.payload.name })
    yield put(updateTagSuccess())
    yield put(getTagsListRequest())
  } catch (error: any) {
    const fieldsErrors: IFieldError[] = error.response?.status === 422
      ? error.response?.data ?? []
      : []
    yield put(updateTagFailure({ fieldsErrors }))
  }
}

/** Удаление тега */
function* deleteSaga(action: any) {
  try {
    yield call(deleteTag, action.payload)
    yield put(deleteTagSuccess(action.payload))
  } catch (error: any) {
    message.error(error.message || 'Ошибка при удалении тега')
    yield put(deleteTagFailure())
  }
}

export function* tagsSaga() {
  yield takeLatest(GET_LIST_REQUEST, getListSaga)
  yield takeLatest(CREATE_REQUEST, createSaga)
  yield takeLatest(UPDATE_REQUEST, updateSaga)
  yield takeLatest(DELETE_REQUEST, deleteSaga)
}
