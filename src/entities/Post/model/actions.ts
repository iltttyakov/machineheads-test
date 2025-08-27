import { IPostListItem } from '@entities/Post'

import {
  GET_LIST_FAILURE,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
} from './actionTypes.ts'

export interface FetchPostsRequestPayload {
    page: number;
    perPage?: number;
}

export const getPostsListRequest = (payload: FetchPostsRequestPayload) => ({
  type: GET_LIST_REQUEST,
  payload,
})

export const getPostsListSuccess = (payload: {
    posts: IPostListItem[];
    currentPage: number;
    totalPages: number;
}) => ({
  type: GET_LIST_SUCCESS,
  payload,
})

export const getPostsListFailure = () => ({
  type: GET_LIST_FAILURE,
})
