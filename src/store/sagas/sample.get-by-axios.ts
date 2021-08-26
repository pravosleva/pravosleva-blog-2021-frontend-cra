import { put, takeLatest, call } from 'redux-saga/effects'
import { ASYNC_LOAD_TEST_DATA, setIsLoadingUserInfoData, setUserInfoData, showAsyncToast } from '~/actions'
import {
  // apiErrorHandler,
  // NOTE: Хорошо бы описать возможные форматы ответов
  // IResponseLocalResultSuccess, IResponseLocalResultError
} from '~/utils/errors/api'
import axios from 'axios'
import { httpErrorHandler } from '~/utils/errors/http/axios'
import { universalAxiosCatch } from '~/utils/errors'

async function fetchUserInfoData(url: string): Promise<any> {
  const result = await axios({
    method: 'get',
    url,
    // NOTE: Актуально в случае если бэк использует статусы ошибок при ответе (1)
    // validateStatus: (status: number) => status >= 200 && status < 500, // default
  })

    // NOTE: Актуально в случае если бэк использует статусы ошибок при ответе (2)
    .then(httpErrorHandler) // res -> res.data

    // NOTE: Для общепринятых соглашений о формате ошибок на проекте
    // .then(apiErrorHandler) // data -> data

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

  const data: IData = yield call(fetchUserInfoData, 'https://jsonplaceholder.typicode.com/users')

  if (data.isOk && !!data.response) {
    yield put(setUserInfoData(data.response))
    yield put(
      showAsyncToast({
        text: `Data received as ${typeof data.response}`,
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

export function* watchAsyncLoadTestData() {
  yield takeLatest(ASYNC_LOAD_TEST_DATA, asyncLoadUserInfoDataWorker)
}