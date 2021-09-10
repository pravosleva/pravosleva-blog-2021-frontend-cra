export const LOAD_PAGE_DATA = 'LOAD_PAGE_DATA'
export const SET_PAGE_DATA = 'SET_PAGE_DATA'
export const SET_IS_LOADING_PAGE_DATA = 'SET_IS_LOADING_PAGE_DATA'
export const SET_IS_LOADED_PAGE_DATA = 'SET_IS_LOADED_PAGE_DATA'
export const SET_IS_MODAL_OPENED = 'SET_IS_MODAL_OPENED'
export const SET_PAGE_ERR = 'SET_PAGE_ERR'

export const loadPageData = (id: string) => {
  return { type: LOAD_PAGE_DATA, payload: id }
}

export const setIsLoadingPageData = (value: boolean) => {
  return { type: SET_IS_LOADING_PAGE_DATA, payload: value }
}

export const setIsLoadedPageData = (value: boolean) => {
  return { type: SET_IS_LOADED_PAGE_DATA, payload: value }
}

export const setPageData = (data: any) => {
  return { type: SET_PAGE_DATA, payload: data }
}

export const setIsModalOpened = (value: boolean) => {
  return { type: SET_IS_MODAL_OPENED, payload: value }
}

export const setPageErr = (value: string) => {
  return { type: SET_PAGE_ERR, payload: value }
}
