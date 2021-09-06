import { SET_SOCKET, SET_SI_MEM, SET_SYSTEM_SPACE } from '~/actions'
import { Systeminformation } from 'systeminformation'

export type TSocket = {
  on(event: string, callback: (data: any) => void): any
  emit(event: string, data: any): any
  off(event: string, callback: (data: any) => void): any
}

export type TSocketState = {
  target: TSocket | null,
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