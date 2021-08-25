import { put, takeLatest, call } from 'redux-saga/effects'
import { ASYNC_LOAD_USER_INFO_DATA, setIsLoadingUserInfoData, setUserInfoData, showAsyncToast } from '~/actions'
import { getApiUrl } from '~/utils/getApiUrl'
import { httpErrorHandler } from '~/utils/errors/http/axios'
// import { networkErrorHandler } from '~/utils/errors/network'
import { apiErrorHandler } from '~/utils/errors/api'
import { universalAxiosCatch } from '~/utils/errors'
import axios from 'axios'

const apiUrl = getApiUrl()

async function fetchUserInfoData(url: string): Promise<any> {
  const result = await axios({
    method: 'get',
    url,
    // validateStatus: (status: number) => status >= 200 && status < 300, // default
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

function* asyncLoadUserInfoDataWorker() {
  yield put(setIsLoadingUserInfoData(true))

  const data: IData = yield call(fetchUserInfoData, `${apiUrl}/user/me`)

  if (data.isOk && !!data.response) {
    yield put(setUserInfoData(data.response))

    yield put(
      showAsyncToast({
        text: `${typeof data.response} received`,
        delay: 5000,
        type: 'success',
      })
    )
  } else {
    yield put(
      showAsyncToast({
        text: data.msg,
        delay: 20000,
        type: 'error',
      })
    )
  }

  yield put(setIsLoadingUserInfoData(false))
}

export function* watchAsyncLoadUserInfoData() {
  yield takeLatest(ASYNC_LOAD_USER_INFO_DATA, asyncLoadUserInfoDataWorker)
}