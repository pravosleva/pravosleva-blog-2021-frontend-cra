import { all } from 'redux-saga/effects'
import { watchToaster } from './toaster'
import { watchAsyncLoadTestData } from './sample.get-by-axios'
import { watchAsyncLoadUserInfoData } from './userInfo'
import { watchProjectInModalData } from './projectInModal'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* rootSaga() {
  yield all([
    watchToaster(),
    watchAsyncLoadTestData(),
    watchAsyncLoadUserInfoData(),
    watchProjectInModalData(),
  ])
}