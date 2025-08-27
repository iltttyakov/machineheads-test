import { IFieldError } from '@shared/lib'
import { AnyAction } from 'redux'

import {
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
} from './actionTypes'

export interface IAuthorCreateState {
    createLoading: boolean
    fieldErrors: IFieldError[]
}

const initialState: IAuthorCreateState = {
  createLoading: false,
  fieldErrors: [],
}

export const authorCreateReducer = (state = initialState, action: AnyAction): IAuthorCreateState => {
  switch (action.type) {

  case CREATE_REQUEST:
    return { ...state, createLoading: true, fieldErrors: [] }
  case CREATE_SUCCESS:
    return { ...state, createLoading: false }
  case CREATE_FAILURE:
    return {
      ...state,
      createLoading: false,
      fieldErrors: action.payload?.fieldsErrors ?? [],
    }

  default:
    return state
  }
}
