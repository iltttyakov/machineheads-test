import {
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  SET_DELETE_MODAL_OPEN,
} from './actionTypes.ts'

export const deletePostRequest = (id: string) => ({
  type: DELETE_REQUEST,
  payload: id,
})

export const deletePostSuccess = () => ({
  type: DELETE_SUCCESS,
})

export const deletePostFailure = () => ({
  type: DELETE_FAILURE,
})

export const setDeletePostModalOpen = (isOpen: boolean) => ({
  type: SET_DELETE_MODAL_OPEN,
  payload: isOpen,
})
