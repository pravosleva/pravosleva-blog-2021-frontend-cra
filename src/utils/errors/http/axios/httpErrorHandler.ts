import { HttpError } from '~/utils/errors/http'
import { AxiosResponse } from 'axios'

type TStrapiResponse = {
  data: any
  error: any
  message: {
    messages: { id: string }[]
  },
  statusCode: number
}

const isValidStrapiRes = (res: any): boolean => {
  return Array.isArray(res?.message)
    && res?.message.every(({ messages }) => !!messages && Array.isArray(messages) && messages.some(({ id }) => !!id))
}
const getErrorMessage = (strapiRes: TStrapiResponse): string => {
  let result: string = 'Не удалось извлечь сообщение из ответа'

  if (isValidStrapiRes(strapiRes)) {
    result = strapiRes.message[0].messages.reduce((acc, { id }) => {
      if (!!id) acc.push(id)
      return acc
    }, []).join(', ')
  }

  return result
}

export const httpErrorHandler = (obj: AxiosResponse): any | HttpError => {
  // console.log('---')
  // console.log(obj)
  // console.log('---')
  if (obj.request?.status === 200) {
    return obj.data
  } else {
    const normalizedMsg = getErrorMessage(obj.data)

    throw new HttpError(obj.request?.status, normalizedMsg || obj.request?.statusText)
  }
}