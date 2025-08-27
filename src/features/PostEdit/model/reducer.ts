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

export interface IPostEditState {
    post: IPostDetail | null
    detailLoading: boolean
    updateLoading: boolean
    updateFieldErrors: IFieldError[]
}

const initialState: IPostEditState = {
  post: null,
  detailLoading: false,
  updateLoading: false,
  updateFieldErrors: [],
}

export const postEditReducer = (state = initialState, action: any): IPostEditState => {
  switch (action.type) {

  // Загрузка поста
  case GET_DETAIL_REQUEST:
    return { ...state, detailLoading: true }
  case GET_DETAIL_SUCCESS:
    return { ...state, detailLoading: false, post: action.payload }
  case GET_DETAIL_FAILURE:
    return { ...state, detailLoading: false }

  // Обновление поста
  case UPDATE_REQUEST:
    return { ...state, updateLoading: true }
  case UPDATE_SUCCESS:
    return { ...state, updateLoading: false }
  case UPDATE_FAILURE:
    return {
      ...state,
      updateLoading: false,
      updateFieldErrors: action.payload?.fieldsErrors ?? [],
    }

  default:
    return state
  }
}
