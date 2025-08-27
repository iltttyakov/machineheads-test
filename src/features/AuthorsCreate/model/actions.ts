import { ICreateAuthorPayload } from '@entities/Author'
import { IFieldError } from '@shared/lib'

import {
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
} from './actionTypes'

export const createAuthorRequest = (payload: ICreateAuthorPayload) => ({
  type: CREATE_REQUEST,
  payload,
})

export const createAuthorSuccess = () => ({
  type: CREATE_SUCCESS,
})

export const createAuthorFailure = (payload: { fieldsErrors?: IFieldError[] }) => ({
  type: CREATE_FAILURE,
  payload,
})
