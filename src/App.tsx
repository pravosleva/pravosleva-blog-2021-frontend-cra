import { useEffect } from 'react'
import { Routes } from '~/routes'
import { useDispatch } from 'react-redux'
import {
  asyncLoadUserInfoData,
} from '~/actions'
// import { IRootState } from '~/store/IRootState'
import { ProjectInModal } from '~/common/material/ProjectInModal'
import { useSocket } from '~/common/hooks'

export const App = () => {
  const dispatch = useDispatch()
  useSocket()
  // const userInfo = useSelector((state: IRootState) => state.userInfo)

  useEffect(() => {
    try{
      dispatch(asyncLoadUserInfoData())
    } catch (err) {
      console.log(err)
    }
  }, [dispatch])

  return (
    <>
      <Routes />
      <ProjectInModal />
    </>
  )
}