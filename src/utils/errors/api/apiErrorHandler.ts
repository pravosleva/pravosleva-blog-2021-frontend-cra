import { ApiError } from './ApiError'

export const apiErrorHandler = (res: any): any | ApiError => {
  if (!!res.id) {
    // For example like uremont api
    return res
  } else {
    // console.log(res)
    throw new ApiError(res?.errors)
  }
}
