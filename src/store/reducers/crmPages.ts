import {
  SET_CRM_PAGES_DATA,
  SET_IS_LOADING_CRM_PAGES_DATA,
  SET_IS_LOADED_CRM_PAGES_DATA,
} from '~/actions'

export type TCRMPage = {
  id: string
  shortName: string
  metadata: {
    shareImage: {
      url: string
      [key: string]: any
    }
    metaDescription: string
  }
  createdAt: string // 2021-08-23T20:15:23.828Z
  updatedAt: string // 2021-09-04T23:54:54.195Z
}
export type TCRMPages = {
  pages: TCRMPage[],
  isLoading: boolean
  isLoaded: boolean
}

const initialState = {
  pages: [],
  isLoading: false,
  isLoaded: false,
}

export const crmPages = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CRM_PAGES_DATA:
      return { ...state, pages: action.payload }
    case SET_IS_LOADING_CRM_PAGES_DATA:
      return { ...state, isLoading: action.payload }
    case SET_IS_LOADED_CRM_PAGES_DATA:
      return { ...state, isLoaded: action.payload }
    default: return state
  }
}
