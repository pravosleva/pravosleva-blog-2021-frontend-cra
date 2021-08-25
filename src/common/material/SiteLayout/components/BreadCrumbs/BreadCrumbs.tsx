import React, { useContext } from 'react'
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
            <Link to="/">Главная</Link>
          </div>
        )}
        {pathname === '/articles' && (
          <div className={classes.rightSide}>
            <Link to="/">Главная</Link><span>/</span>
            <span className={classes.muted}>Статьи</span>
          </div>
        )}
        {pathname.includes('/articles/') && pathname.length > 10 && (
          <div className={classes.rightSide}>
            <Link to="/">Главная</Link><span>/</span><Link to="/projects">Проекты</Link> /{' '}
            {/*!remontLogic?.name && (
              <span className={classes.muted}>Please wait...</span>
            )}
            {!!remontLogic?.name && (
              <span style={{ whiteSpace: 'nowrap' }} className={classes.muted}>
                {remontLogic.name.length <= 35 ? remontLogic.name : `${remontLogic.name.slice(0, 34)}...`}
              </span>
            )*/}
          </div>
        )}
        {pathname === '/projects' && (
          <div className={classes.rightSide}>
            <Link to="/">Главная</Link><span>/</span>
            <span className={classes.muted}>Проекты</span>
          </div>
        )}
      </div>
    </Container>
  )
}
