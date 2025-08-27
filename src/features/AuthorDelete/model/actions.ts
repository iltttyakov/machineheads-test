import {
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  SET_DELETE_MODAL_OPEN,
} from './actionTypes.ts'

export const setDeleteAuthorModalOpen = (isOpen: boolean) => ({
  type: SET_DELETE_MODAL_OPEN,
  payload: isOpen,
})

export const deleteAuthorRequest = (id: number) => ({
  type: DELETE_REQUEST,
  payload: id,
})

export const deleteAuthorSuccess = () => ({
  type: DELETE_SUCCESS,
})

export const deleteAuthorFailure = () => ({
  type: DELETE_FAILURE,
})
