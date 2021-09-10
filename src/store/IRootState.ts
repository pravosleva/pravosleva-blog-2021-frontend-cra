import { Store } from 'redux'
// import { IToast } from '../actions'
import { TCRMProjects } from '~/store/reducers/crmPages'
import { TSocketState } from '~/store/reducers/socket'
import { TProjectInModal } from '~/store/reducers/projectInModal'

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
  projectInModal: TProjectInModal
  crmPages: TCRMProjects
  socket: TSocketState
}