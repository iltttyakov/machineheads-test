import { IPostDetail } from '@entities/Post'
import { IFieldError } from '@shared/lib'

import {
  GET_DETAIL_FAILURE,
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  UPDATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from './actionTypes'

export const getPostDetailRequest = (id: string) => ({
  type: GET_DETAIL_REQUEST,
  payload: id,
})

export const getPostDetailSuccess = (post: IPostDetail) => ({
  type: GET_DETAIL_SUCCESS,
  payload: post,
})

export const getPostDetailFailure = () => ({
  type: GET_DETAIL_FAILURE,
})

export const updatePostRequest = (payload: any) => ({
  type: UPDATE_REQUEST,
  payload,
})

export const updatePostSuccess = () => ({
  type: UPDATE_SUCCESS,
})

export const updatePostFailure = (payload: { fieldsErrors?: IFieldError[] }) => ({
  type: UPDATE_FAILURE,
  payload,
})
