import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { MainContext } from '~/common/context/MainContext'
// import { useCookies } from 'react-cookie'
import { useRouter } from '~/common/hooks/useRouter'
import { Container } from '@material-ui/core'
import { useStyles } from './styles'

export const BreadCrumbs = () => {
  const classes = useStyles()
  // const { ...rest }: IPageParams = useParams()
  // const { remontLogic } = useContext(MainContext)
  const router = useRouter()
  // const [cookies, setCookie, removeCookie] = useCookies(['jwt'])
  const {
    location: { pathname },
  } = router

  return (
    <Container maxWidth='md'>
      <div className={classes.wrapper}>
        {/* RIGHT SIDE */}

        {pathname === '/' && (
          <div className={classes.rightSide}>
            <span className={classes.muted}>Главная</span>
          </div>
        )}
        {pathname === '/projects' && (
          <div className={classes.rightSide}>
            <Link to="/">Главная</Link><span className={classes.muted}>/</span>
            <span className={classes.muted}>Проекты</span>
          </div>
        )}
        {pathname === '/articles' && (
          <div className={classes.rightSide}>
            <Link to="/">Главная</Link><span className={classes.muted}>/</span>
            <span className={classes.muted}>Статьи</span>
          </div>
        )}
        {pathname === '/portfolio' && (
          <div className={classes.rightSide}>
            <Link to="/">Главная</Link><span className={classes.muted}>/</span>
            <span className={classes.muted}>Прочее</span>
          </div>
        )}
        {pathname === '/try-ui' && (
          <div className={classes.rightSide}>
            <Link to="/">Главная</Link><span className={classes.muted}>/</span>
            <span className={classes.muted}>Try UI</span>
          </div>
        )}
      </div>
    </Container>
  )
}
