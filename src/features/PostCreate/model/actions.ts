import { ICreatePostPayload } from '@entities/Post'
import { IFieldError } from '@shared/lib'

import {
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
} from './actionTypes'

export const createPostRequest = (payload: ICreatePostPayload) => ({
  type: CREATE_REQUEST,
  payload,
})

export const createPostSuccess = () => ({
  type: CREATE_SUCCESS,
})

export const createPostFailure = (payload: { fieldsErrors?: IFieldError[] }) => ({
  type: CREATE_FAILURE,
  payload,
})
