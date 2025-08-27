import { ITagListItem } from '@entities/Tag'
import { IFieldError } from '@shared/lib'
import { AnyAction } from 'redux'

import {
  CREATE_FAILURE,
  CREATE_MODAL_OPEN,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS, GET_LIST_FAILURE,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  SET_DELETING_TAG,
  SET_EDITING_TAG,
  UPDATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from './actionTypes'

export interface ITagsState {
    tags: ITagListItem[]
    listLoading: boolean
    createLoading: boolean
    updateLoading: boolean
    deleteLoading: boolean
    editingTag: ITagListItem | null
    deletingTag: ITagListItem | null
    createModalOpen: boolean
    createFieldErrors: IFieldError[]
    updateFieldErrors: IFieldError[]
}

const initialState: ITagsState = {
  tags: [],
  listLoading: false,
  createLoading: false,
  updateLoading: false,
  deleteLoading: false,
  editingTag: null,
  deletingTag: null,
  createModalOpen: false,
  createFieldErrors: [],
  updateFieldErrors: [],
}

export const tagsReducer = (state = initialState, action: AnyAction): ITagsState => {
  switch (action.type) {

  // Загрузка списка
  case GET_LIST_REQUEST:
    return { ...state, listLoading: true }
  case GET_LIST_SUCCESS:
    return { ...state, listLoading: false, tags: action.payload }
  case GET_LIST_FAILURE:
    return { ...state, listLoading: false }

  // Создание
  case CREATE_REQUEST:
    return { ...state, createLoading: true, createFieldErrors: [] }
  case CREATE_SUCCESS:
    return { ...state, createLoading: false, createModalOpen: false }
  case CREATE_FAILURE:
    return { ...state, createLoading: false, createFieldErrors: action.payload }
  case CREATE_MODAL_OPEN:
    return { ...state, createModalOpen: action.payload }

  // Редактирование
  case UPDATE_REQUEST:
    return { ...state, updateLoading: true, updateFieldErrors: [] }
  case UPDATE_SUCCESS:
    return {
      ...state,
      updateLoading: false,
      editingTag: null,
      createModalOpen: false,
    }
  case UPDATE_FAILURE:
    return { ...state, updateLoading: false, updateFieldErrors: action.payload }

  // Удаление
  case DELETE_REQUEST:
    return { ...state, deleteLoading: true }
  case DELETE_SUCCESS:
    return {
      ...state,
      deleteLoading: false,
      deletingTag: null,
      tags: state.tags.filter((tag) => tag.id !== action.payload),
    }
  case DELETE_FAILURE:
    return { ...state, deleteLoading: false }

  // Установка редактируемого и удаляемого тега
  case SET_EDITING_TAG:
    return { ...state, editingTag: action.payload }
  case SET_DELETING_TAG:
    return { ...state, deletingTag: action.payload }

  default:
    return state
  }
}
