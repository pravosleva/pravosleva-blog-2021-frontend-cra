// import { useCallback } from 'react'
import { Button, Container, CircularProgress } from '@material-ui/core'
import { useRouter } from '~/common/hooks/useRouter'
import { useStyles } from './styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useDispatch, useSelector } from 'react-redux'
import {
  showAsyncToast,
  // login,
} from '~/actions'
import { IRootState } from '~/store'

export const SiteHeader = () => {
  const classes = useStyles()
  const router = useRouter()
  const {
    location: { pathname },
  } = router
  const dispatch = useDispatch()
  // TODO:
  // const handleLogin = useCallback(() => {
  //   dispatch(login())
  // }, [dispatch])
  const isLoading = useSelector((state: IRootState) => state.userInfo.isLoading)

  return (
    <Container maxWidth='md'>
      <div className={classes.wrapper}>
        <div className={classes.rightSide}>
          <Button
            onClick={() => {
              dispatch(showAsyncToast({
                text: 'In progress...',
                type: 'info',
                delay: 5000,
              }))
              // handleLogin()
            }}
            size="small"
            variant={"outlined"}
            color="primary"
            endIcon={
              isLoading
              ? <CircularProgress size={15} color="inherit" />
              : <AccountCircleIcon />
            }
            disabled={isLoading || pathname === '/auth/login'}
          >
            <span>Вход</span>
          </Button>
        </div>
      </div>
    </Container>
  )
}
