import {
  put,
  takeLatest,
  select,
  // call,
} from 'redux-saga/effects'
import {
  // SOCKET_CONNECT,
  SOCKET_DISCONNECT,
  SET_SOCKET_DISCONNECTED,
  // SET_SOCKET_CONNECTED,
  // setSocket,
  // socketDisonnect,
  showAsyncToast,
  // ESocketEventlist,
} from '~/actions'
import { IRootState } from '~/store'

const getSocket = (state: IRootState) => state.socket?.target

// function* socketConnectWorker({ payload }: any) {
//   yield put(setSocket(payload))
//   yield put({ type: SET_SOCKET_CONNECTED })

//   const socket = yield select(getSocket)
//   console.log(socket)
// }

function* socketDisonnectWorker() {
  yield put(
    showAsyncToast({
      type: 'error',
      text: 'Socket connection lost',
      delay: 5000,
    })
  )

  yield put({ type: SET_SOCKET_DISCONNECTED })

  const socket = yield select(getSocket)
  console.log(socket)
}


export function* watchSocket() {
  // yield takeLatest(SOCKET_CONNECT, socketConnectWorker)
  yield takeLatest(SOCKET_DISCONNECT, socketDisonnectWorker)
}