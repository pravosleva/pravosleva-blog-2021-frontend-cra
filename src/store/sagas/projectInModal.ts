import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { getApiUrl } from '~/utils/getApiUrl'
import { httpErrorHandler } from '~/utils/errors/http/axios'
// import { networkErrorHandler } from '~/utils/errors/network'
import { apiErrorHandler } from '~/utils/errors/api'
import { universalAxiosCatch } from '~/utils/errors'
import {
  LOAD_PROJECT_DATA,
  // SET_PROJECT_DATA,
  // SET_IS_LOADING_PROJECT_DATA,
  // SET_IS_LOADED_PROJECT_DATA,
  // setIsModalOpened,
  setIsLoadingProjectData,
  setIsLoadedProjectData,
  showAsyncToast,
  setProjectData,
  setProjectErr,
} from '~/actions'

const apiUrl = getApiUrl()

async function fetchUserInfoData(url: string): Promise<any> {
  const result = await axios({
    method: 'get',
    url,
    validateStatus: (status: number) => status >= 200 && status < 500, // default
  })
    .then(httpErrorHandler) // res -> res.data
    .then(apiErrorHandler) // data -> data
    .then((data: any) => ({
      isOk: true,
      response: data,
    }))
    .catch(universalAxiosCatch)
  return result
}

interface IData {
  isOk: boolean
  response?: any
  msg?: string
}

function* loadProjectDataWorker(action) {
  const { payload } = action
  yield put(setIsLoadingProjectData(true))
  yield put(setIsLoadedProjectData(false))
  yield put(setProjectData(null))
  yield put(setProjectErr(null))

  const data: IData = yield call(fetchUserInfoData, `${apiUrl}/pages/${payload}`)

  if (data.isOk && !!data.response) {
    yield put(setProjectData(data.response))

    // yield put(setIsModalOpened(true))
    yield put(setIsLoadedProjectData(true))
    // yield put(
    //   showAsyncToast({
    //     text: `${typeof data.response} received`,
    //     delay: 5000,
    //     type: 'success',
    //   })
    // )
  } else {
    // NOTE: Необязательно для данной проверки
    yield put(
      showAsyncToast({
        text: data.msg,
        delay: 20000,
        type: 'error',
      })
    )
    yield put(
      setProjectErr(data.msg)
    )
  }

  yield put(setIsLoadingProjectData(false))
}

export function* watchProjectInModalData() {
  yield takeLatest(LOAD_PROJECT_DATA, loadProjectDataWorker)
  // yield takeLatest(LOGIN, loginWorker)
}
