import { IAuthorDetail, IUpdateAuthorPayload } from '@entities/Author'
import { IFieldError } from '@shared/lib'

import {
  GET_DETAIL_FAILURE,
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  UPDATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from './actionTypes'

// Получение автора
export const getAuthorDetailRequest = (id: number) => ({
  type: GET_DETAIL_REQUEST,
  payload: id,
})

export const getAuthorDetailSuccess = (author: IAuthorDetail) => ({
  type: GET_DETAIL_SUCCESS,
  payload: author,
})

export const getAuthorDetailFailure = () => ({
  type: GET_DETAIL_FAILURE,
})

// Редактирование автора
export const updateAuthorRequest = (payload: IUpdateAuthorPayload) => ({
  type: UPDATE_REQUEST,
  payload,
})

export const updateAuthorSuccess = () => ({
  type: UPDATE_SUCCESS,
})

export const updateAuthorFailure = (payload: { fieldsErrors?: IFieldError[] }) => ({
  type: UPDATE_FAILURE,
  payload,
})
