import { SET_SOCKET, SET_SI_MEM, SET_SYSTEM_SPACE, SET_SOCKET_DISCONNECTED, SET_SOCKET_CONNECTED } from '~/actions'
import { Systeminformation } from 'systeminformation'
import { Socket } from 'socket.io-client'

// type TSocket = {
//   on(event: string, callback: (data: any) => void): any
//   emit(event: string, data: any): any
//   off(event: string, callback: (data: any) => void): any
// }

export type TSocketState = {
  target: Socket | null,
  isConnected: boolean,
  siMem: Systeminformation.MemData | null,
  systemSpace: {
    code: string | any
    stdout: string | any
    stderr: string | any
  } | null,
}

const inititalState: TSocketState = {
  target: null,
  isConnected: false,
  siMem: null,
  systemSpace: null,
}

export const socket = (state = inititalState, action: any) => {
  switch (action.type) {
    case SET_SOCKET:
      return {
        ...state,
        target: action.payload,
        isConnected: !!action.payload,
      }
    case SET_SOCKET_DISCONNECTED:
      return {
        ...state,
        isConnected: false,
      }
    case SET_SOCKET_CONNECTED:
      return {
        ...state,
        isConnected: true,
      }
    case SET_SI_MEM:
      return {
        ...state,
        siMem: action.payload,
      }
    case SET_SYSTEM_SPACE:
      return {
        ...state,
        systemSpace: action.payload,
      }
    default:
      return state
  }
}