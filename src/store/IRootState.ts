import { Store } from 'redux'
// import { IToast } from '../actions'
import { TCRMPages } from '~/store/reducers/crmPages'

export interface IRootState extends Store {
  [x: string]: any
  // toaster: {
  //   items: IToast[]
  // }
  // myDevice: {
  //   width: number
  //   type: string | null
  //   isDetected: boolean
  // }
  userInfo: {
    isLoading: boolean
  }
  projectInModal: {
    activeProgectId: string | null
    isLoading: boolean
    isLoaded: boolean
    data: any | null
    isModalOpened: boolean
  }
  crmPages: TCRMPages
}