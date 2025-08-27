import { IPostListItem } from '@entities/Post'

import {
  GET_LIST_FAILURE,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
} from './actionTypes'

export interface IPostsState {
    posts: IPostListItem[];
    listLoading: boolean;
    currentPage: number;
    totalPages: number;
}

const initialState: IPostsState = {
  posts: [],
  listLoading: false,
  currentPage: 1,
  totalPages: 0,
}

export const postsReducer = (state = initialState, action: any): IPostsState => {
  switch (action.type) {

  case GET_LIST_REQUEST:
    return { ...state, listLoading: true }
  case GET_LIST_SUCCESS:
    return {
      ...state,
      listLoading: false,
      posts: action.payload.posts,
      currentPage: action.payload.currentPage,
      totalPages: action.payload.totalPages,
    }
  case GET_LIST_FAILURE:
    return { ...state, listLoading: false }

  default:
    return state
  }
}
