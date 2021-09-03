export const LOAD_PROJECT_DATA = 'LOAD_PROJECT_DATA'
export const SET_PROJECT_DATA = 'SET_PROJECT_DATA'
export const SET_IS_LOADING_PROJECT_DATA = 'SET_IS_LOADING_PROJECT_DATA'
export const SET_IS_LOADED_PROJECT_DATA = 'SET_IS_LOADED_PROJECT_DATA'
export const SET_IS_MODAL_OPENED = 'SET_IS_MODAL_OPENED'

export const loadProjectData = (id: string) => {
  return { type: LOAD_PROJECT_DATA, payload: id }
}

export const setIsLoadingProjectData = (value: boolean) => {
  return { type: SET_IS_LOADING_PROJECT_DATA, payload: value }
}

export const setIsLoadedProjectData = (value: boolean) => {
  return { type: SET_IS_LOADED_PROJECT_DATA, payload: value }
}

export const setProjectData = (data: any) => {
  return { type: SET_PROJECT_DATA, payload: data }
}

export const setIsModalOpened = (value: boolean) => {
  return { type: SET_IS_MODAL_OPENED, payload: value }
}
