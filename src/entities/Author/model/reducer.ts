import { IAuthorListItem } from '@entities/Author'
import { AnyAction } from 'redux'

import {
  GET_LIST_FAILURE,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
} from './actionTypes'

export interface IAuthorsState {
    authors: IAuthorListItem[]
    listIsLoading: boolean
}

const initialState: IAuthorsState = {
  authors: [],
  listIsLoading: false,
}

export const authorsReducer = (state = initialState, action: AnyAction): IAuthorsState => {
  switch (action.type) {

  case GET_LIST_REQUEST:
    return { ...state, listIsLoading: true }
  case GET_LIST_SUCCESS:
    return { ...state, listIsLoading: false, authors: action.payload }
  case GET_LIST_FAILURE:
    return { ...state, listIsLoading: false }

  default:
    return state
  }
}
