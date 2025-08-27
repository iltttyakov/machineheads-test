import { IAuthorListItem } from '@entities/Author'

import {
  GET_LIST_FAILURE,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
} from './actionTypes'

export const getAuthorsListRequest = () => ({
  type: GET_LIST_REQUEST,
})

export const getAuthorsListSuccess = (authors: IAuthorListItem[]) => ({
  type: GET_LIST_SUCCESS,
  payload: authors,
})

export const getAuthorsListFailure = () => ({
  type: GET_LIST_FAILURE,
})
