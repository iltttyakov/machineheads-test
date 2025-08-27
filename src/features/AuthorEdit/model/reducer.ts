import { IAuthorDetail } from '@entities/Author'
import { IFieldError } from '@shared/lib'
import { AnyAction } from 'redux'

import {
  GET_DETAIL_FAILURE,
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  UPDATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from './actionTypes'

export interface IAuthorEditState {
    author: IAuthorDetail | null
    detailLoading: boolean
    updateLoading: boolean
    updateFieldErrors: IFieldError[]
}

const initialState: IAuthorEditState = {
  author: null,
  detailLoading: false,
  updateLoading: false,
  updateFieldErrors: [],
}

export const authorEditReducer = (state = initialState, action: AnyAction): IAuthorEditState => {
  switch (action.type) {

  // Загрузка автора
  case GET_DETAIL_REQUEST:
    return { ...state, detailLoading: true }
  case GET_DETAIL_SUCCESS:
    return { ...state, detailLoading: false, author: action.payload }
  case GET_DETAIL_FAILURE:
    return { ...state, detailLoading: false }

    // Обновление автора
  case UPDATE_REQUEST:
    return { ...state, updateLoading: true, updateFieldErrors: [] }
  case UPDATE_SUCCESS:
    return { ...state, updateLoading: false }
  case UPDATE_FAILURE:
    return { ...state, updateLoading: false, updateFieldErrors: action.payload }

  default:
    return state
  }
}
