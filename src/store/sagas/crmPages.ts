import { put, takeLatest, call } from 'redux-saga/effects'
import {
  LOAD_CRM_PAGES_DATA,
  setIsLoadingCrmPagesData,
  setIsLoadedCrmPagesData,
  setCrmPagesData,
  showAsyncToast,
} from '~/actions'
import { getApiUrl } from '~/utils/getApiUrl'
import { httpErrorHandler } from '~/utils/errors/http/axios'
// import { networkErrorHandler } from '~/utils/errors/network'
// import { apiErrorHandler } from '~/utils/errors/api'
import { universalAxiosCatch } from '~/utils/errors'
import axios from 'axios'
import { ApiError } from '~/utils/errors/api'

// NOTE: For example https://github.com/pravosleva/my-remont-2020-frontend.demo/blob/main/src/pages/projects/Projects.tsx
const GET_CRM_PAGES = `
  {
    pages(sort: "createdAt:DESC")  {
      id
      shortName
      updatedAt
      createdAt
    }
  }
`

const apiUrl = getApiUrl()
const axiosOpts = {
  baseURL: `${apiUrl}/graphql`,
}
const axiosRemoteGQL = axios.create(axiosOpts)

async function fetchCrmPagesData(): Promise<any> {
  const result = await axiosRemoteGQL
  .post('', {
    query: GET_CRM_PAGES,
    validateStatus: (status: number) => status >= 200 && status < 500, // default
  })
    .then(httpErrorHandler) // res -> res.data
    .then((data) => {
      if (Array.isArray(data?.data?.pages)) {
        return data?.data?.pages
      }
      throw new ApiError([{ api: ['Fuckup'] }])
    }) // data -> data
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

function* asyncLoadCrmPagesWorker() {
  yield put(setIsLoadingCrmPagesData(true))
  yield put(setIsLoadedCrmPagesData(false))

  const data: IData = yield call(fetchCrmPagesData)

  if (data.isOk && !!data.response) {
    yield put(setCrmPagesData(data.response))
    yield put(setIsLoadedCrmPagesData(true))
    // yield put(
    //   showAsyncToast({ text: `${data.response.length} received`, delay: 5000, type: 'success' })
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
  }

  yield put(setIsLoadingCrmPagesData(false))
}

export function* watchCrmPages() {
  yield takeLatest(LOAD_CRM_PAGES_DATA, asyncLoadCrmPagesWorker)
}
