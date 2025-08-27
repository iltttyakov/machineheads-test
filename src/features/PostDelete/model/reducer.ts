import {
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  SET_DELETE_MODAL_OPEN,
} from './actionTypes'

export interface IPostDeleteState {
    deleting: boolean
    modalOpen: boolean
}

const initialState: IPostDeleteState = {
  deleting: false,
  modalOpen: false,
}

export const postDeleteReducer = (
  state = initialState,
  action: any,
): IPostDeleteState => {
  switch (action.type) {

  case DELETE_REQUEST:
    return { ...state, deleting: true }
  case DELETE_SUCCESS:
    return { ...state, deleting: false, modalOpen: false }
  case DELETE_FAILURE:
    return { ...state, deleting: false }
  case SET_DELETE_MODAL_OPEN:
    return { ...state, modalOpen: action.payload }

  default:
    return state
  }
}
