import { combineReducers } from 'redux'
// import { myDevice } from './myDevice'
import { toaster } from './toaster'
import { userInfo } from './userInfo'
import { projectInModal } from './projectInModal'
import { crmPages } from './crmPages'
import { socket } from './socket'

export const rootReducer = combineReducers({
  // myDevice,
  toaster,
  userInfo,
  projectInModal,
  crmPages,
  socket,
})