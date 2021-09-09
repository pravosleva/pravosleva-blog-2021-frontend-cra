import { Systeminformation } from 'systeminformation'
import { Socket } from 'socket.io-client'

export const SOCKET_CONNECT = 'SOCKET_CONNECT'
export const SOCKET_DISCONNECT = 'SOCKET_DISCONNECT'
export const SET_SOCKET = 'SET_SOCKET'
export const SET_SI_MEM = 'SET_SI_MEM'
export const SET_SYSTEM_SPACE = 'SET_SYSTEM_SPACE'

export enum ESocketEventlist {
  YOURE_WELCOME = 'YOURE_WELCOME',
  SI_MEM = 'SI_MEM',
  SYSTEM_SPACE = 'SYSTEM_SPACE',
  PAGE_CREATED = 'PAGE_CREATED',
  PAGE_UPDATED = 'PAGE_UPDATED',
}

// NOTE: Only for Saga usage sample:
export const socketConnect = (socket: Socket) => {
  return { type: SOCKET_CONNECT, payload: socket }
}
export const socketDisonnect = () => {
  return { type: SOCKET_DISCONNECT }
}

export const setSiMem = (siOutput: Systeminformation.MemData) => {
  return { type: SET_SI_MEM, payload: siOutput }
}
export const setSystemSpace = ({ code, stdout, stderr }: any) => {
  return { type: SET_SYSTEM_SPACE, payload: { code, stdout, stderr } }
}
export const setSocket = (socket: Socket | null) => {
  return { type: SET_SOCKET, payload: socket }
}
