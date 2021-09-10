export const LOAD_CRM_PROJECTS_DATA = 'LOAD_CRM_PROJECTS_DATA'
export const SET_CRM_PAGES_DATA = 'SET_CRM_PAGES_DATA'
export const SET_IS_LOADING_CRM_PAGES_DATA = 'SET_IS_LOADING_CRM_PAGES_DATA'
export const SET_IS_LOADED_CRM_PAGES_DATA = 'SET_IS_LOADED_CRM_PAGES_DATA'

export const loadCrmPagesData = () => {
  return { type: LOAD_CRM_PROJECTS_DATA }
}

export const setIsLoadingCrmPagesData = (value: boolean) => {
  return { type: SET_IS_LOADING_CRM_PAGES_DATA, payload: value }
}

export const setIsLoadedCrmPagesData = (value: boolean) => {
  return { type: SET_IS_LOADED_CRM_PAGES_DATA, payload: value }
}

export const setCrmPagesData = ({ projects, articles }: { projects: any[], articles: any[] }) => {
  return { type: SET_CRM_PAGES_DATA, payload: { projects, articles } }
}
