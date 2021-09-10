import {
  SET_PAGE_DATA,
  SET_IS_LOADING_PAGE_DATA,
  SET_IS_LOADED_PAGE_DATA,
  SET_IS_MODAL_OPENED,
  SET_PAGE_ERR,
} from '~/actions'

export type TProjectInModal = {
  activeProgectId: string | null
  isLoading: boolean
  isLoaded: boolean
  data: any | null
  isModalOpened: boolean
  errMsg: string | null
}

const initialState: TProjectInModal = {
  activeProgectId: null,
  isLoading: false,
  isLoaded: false,
  data: null,
  isModalOpened: false,
  errMsg: null
}

export const projectInModal = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_LOADING_PAGE_DATA:
      return { ...state, isLoading: action.payload }
    case SET_PAGE_DATA:
      return { ...state, data: action.payload }
    case SET_IS_LOADED_PAGE_DATA:
      return { ...state, isLoaded: action.payload }
    case SET_IS_MODAL_OPENED:
      return { ...state, isModalOpened: action.payload }
    case SET_PAGE_ERR:
      return { ...state, errMsg: action.payload }
    default: return state
  }
}