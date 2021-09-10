import {
  SET_CRM_PAGES_DATA,
  SET_IS_LOADING_CRM_PAGES_DATA,
  SET_IS_LOADED_CRM_PAGES_DATA,
} from '~/actions'

export enum EPageType {
  PROJECT = 'project',
  ARTICLE = 'article',
}

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
  type: EPageType
}
export type TCRMProjects = {
  projects: TCRMPage[],
  articles: TCRMPage[],
  isLoading: boolean
  isLoaded: boolean
}

const initialState = {
  projects: [],
  isLoading: false,
  isLoaded: false,
}

export const crmPages = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CRM_PAGES_DATA:
      const { projects, articles } = action.payload
      return { ...state, projects, articles }
    case SET_IS_LOADING_CRM_PAGES_DATA:
      return { ...state, isLoading: action.payload }
    case SET_IS_LOADED_CRM_PAGES_DATA:
      return { ...state, isLoaded: action.payload }
    default: return state
  }
}
