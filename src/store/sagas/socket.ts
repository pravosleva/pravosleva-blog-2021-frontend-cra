import { put, takeLatest,
  // select, call,
} from 'redux-saga/effects'
import {
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
  setSocket,
  // socketDisonnect,
  showAsyncToast,
  // ESocketEventlist,
} from '~/actions'
// import { IRootState } from '~/store'

// const getSocket = (state: IRootState) => state.socket.target

function* socketConnectWorker({ payload }: any) {
  yield put(setSocket(payload))

  // const socket = yield select(getSocket)

  // NOTE: UNSUBSCRIBE
  // yield call(socket.on, ESocketEventlist.SI_MEM, onSiMem)
  // yield call(socket.on, ESocketEventlist.YOURE_WELCOME, onYoureWelcome)
  // Etc.
}

function* socketDisonnectWorker() {
  yield put(
    showAsyncToast({
      type: 'error',
      text: 'Socket connection lost',
      delay: 5000,
    })
  )

  // const socket = yield select(getSocket)

  // NOTE: UNSUBSCRIBE
  // yield call(socket.off, ESocketEventlist.SI_MEM, onSiMem)
  // yield call(socket.off, ESocketEventlist.YOURE_WELCOME, onYoureWelcome)
  // Etc.

  yield put(setSocket(null))
}


export function* watchSocket() {
  yield takeLatest(SOCKET_CONNECT, socketConnectWorker)
  yield takeLatest(SOCKET_DISCONNECT, socketDisonnectWorker)
}