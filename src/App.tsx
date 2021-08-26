import { useEffect } from 'react'
import { Routes } from '~/routes';
import { useDispatch } from 'react-redux'
import {
  // showAsyncToast,
  asyncLoadUserInfoData,
} from '~/actions'
// import { IRootState } from '~/store/IRootState'

export const App = () => {
  const dispatch = useDispatch()
  // const userInfo = useSelector((state: IRootState) => state.userInfo)

  useEffect(() => {
    try{
      dispatch(asyncLoadUserInfoData())
    } catch (err) {
      console.log(err)
    }
  }, [dispatch])

  return (
    <><Routes /></>
  )
}