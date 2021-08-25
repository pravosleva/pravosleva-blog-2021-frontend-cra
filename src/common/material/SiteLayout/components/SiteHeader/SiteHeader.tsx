import { Button, Container } from '@material-ui/core'
import { useRouter } from '~/common/hooks/useRouter'
import { useStyles } from './styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useDispatch } from 'react-redux'
import { showAsyncToast } from '~/actions'

export const SiteHeader = () => {
  const classes = useStyles()
  const router = useRouter()
  const {
    location: { pathname },
  } = router
  const dispatch = useDispatch()

  return (
    <Container maxWidth='md'>
      <div className={classes.wrapper}>
        <div className={classes.rightSide}>
        <Button
              // style={{ marginLeft: '10px' }}
              onClick={() => {
                dispatch(showAsyncToast({
                  text: 'In progress...',
                  type: 'info',
                  delay: 5000,
                }))
              }}
              size="small"
              variant={"outlined"}
              color="primary"
              endIcon={<AccountCircleIcon />}
              disabled={pathname === '/auth/login'}
            >
              <span>Вход</span>
            </Button>
        </div>
      </div>
    </Container>
  )
}
