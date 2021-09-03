import {
  SET_PROJECT_DATA,
  SET_IS_LOADING_PROJECT_DATA,
  SET_IS_LOADED_PROJECT_DATA,
  SET_IS_MODAL_OPENED,
} from '~/actions'

const initialState = {
  activeProgectId: null,
  isLoading: false,
  isLoaded: false,
  data: null,
  isModalOpened: false,
}

export const projectInModal = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_LOADING_PROJECT_DATA:
      return { ...state, isLoading: action.payload }
    case SET_PROJECT_DATA:
      return { ...state, data: action.payload }
    case SET_IS_LOADED_PROJECT_DATA:
      return { ...state, isLoaded: action.payload }
    case SET_IS_MODAL_OPENED:
      return { ...state, isModalOpened: action.payload }
    default: return state
  }
}