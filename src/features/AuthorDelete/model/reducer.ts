import { AnyAction } from 'redux'

import {
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  SET_DELETE_MODAL_OPEN,
} from './actionTypes'

export interface IAuthorDeleteState {
    deleteModalOpen: boolean
    deleteLoading: boolean
}

const initialState: IAuthorDeleteState = {
  deleteModalOpen: false,
  deleteLoading: false,
}

export const authorDeleteReducer = (state = initialState, action: AnyAction): IAuthorDeleteState => {
  switch (action.type) {

  case SET_DELETE_MODAL_OPEN:
    return { ...state, deleteModalOpen: action.payload }
  case DELETE_REQUEST:
    return { ...state, deleteLoading: true }
  case DELETE_SUCCESS:
    return { ...state, deleteLoading: false, deleteModalOpen: false }
  case DELETE_FAILURE:
    return { ...state, deleteLoading: false }

  default:
    return state
  }
}
