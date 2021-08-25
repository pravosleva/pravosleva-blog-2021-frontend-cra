import { TRole } from './TRole'

export type TUserData = {
  confirmed: boolean
  blocked: boolean
  _id: string
  username: string
  email: string
  provider: string
  createdAt: Date
  updatedAt: Date
  __v: number
  role: TRole
  id: string
}