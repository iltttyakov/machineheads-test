import { ICreateTagPayload, ITagListItem } from '@entities/Tag'
import { IFieldError } from '@shared/lib'

import {
  CREATE_FAILURE,
  CREATE_MODAL_OPEN,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  GET_LIST_FAILURE,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  SET_DELETING_TAG,
  SET_EDITING_TAG,
  UPDATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from './actionTypes'

// Загрузка списка тегов
export const getTagsListRequest = () => ({
  type: GET_LIST_REQUEST,
})

export const getTagsListSuccess = (tags: ITagListItem[]) => ({
  type: GET_LIST_SUCCESS,
  payload: tags,
})

export const getTagsListFailure = () => ({
  type: GET_LIST_FAILURE,
})

// Создание тега
export const createTagRequest = (payload: ICreateTagPayload) => ({
  type: CREATE_REQUEST,
  payload,
})

export const createTagSuccess = () => ({
  type: CREATE_SUCCESS,
})

export const createTagFailure = (payload: { fieldsErrors?: IFieldError[] }) => ({
  type: CREATE_FAILURE,
  payload,
})

export const setCreateTagModalOpen = (isOpen: boolean) => ({
  type: CREATE_MODAL_OPEN,
  payload: isOpen,
})

// Редактирование тега
export const updateTagRequest = (tag: ITagListItem) => ({
  type: UPDATE_REQUEST,
  payload: tag,
})

export const updateTagSuccess = () => ({
  type: UPDATE_SUCCESS,
})

export const updateTagFailure = (payload: { fieldsErrors?: IFieldError[] }) => ({
  type: UPDATE_FAILURE,
  payload,
})

// Удаление тега
export const deleteTagRequest = (tagId: number | undefined) => ({
  type: DELETE_REQUEST,
  payload: tagId,
})

export const deleteTagSuccess = (tagId: number) => ({
  type: DELETE_SUCCESS,
  payload: tagId,
})

export const deleteTagFailure = () => ({
  type: DELETE_FAILURE,
})

// Установка текущего редактируемого тега
export const setEditingTag = (tag: ITagListItem | null) => ({
  type: SET_EDITING_TAG,
  payload: tag,
})

// Установка текущего удаляемого тега
export const setDeletingTag = (tag: ITagListItem | null) => ({
  type: SET_DELETING_TAG,
  payload: tag,
})
