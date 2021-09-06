import React, { useCallback, useState } from 'react'
// import { Link } from 'react-router-dom'
import { Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './styles'
import { useRouter } from '~/common/hooks/useRouter'
import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import { ErrorInModal } from './components'

// const isDev = process.env.NODE_ENV === 'development'

export const HomePage = () => {
  const classes = useStyles()
  const router = useRouter()
  const goToPage = useCallback(
    (link: string) => () => {
      router.push(link)
    },
    [router]
  )
  const goExternalLink = useCallback(
    (link: string) => () => {
      window.open(link, "_blank");
    },
    []
  )
  const [isErrorImModalOpened, setIsErrorImModalOpened] = useState(false)
  const openErrInModal = useCallback(() => {
    setIsErrorImModalOpened(true)
  }, [])
  const closeErrInModal = useCallback(() => {
    setIsErrorImModalOpened(false)
  }, [])

  return (
    <ResponsiveBlock isLimited={true}>
      <>
        <h1>Home</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={goToPage('/projects')}
              >
                <ListItemText primary="Проекты" secondary="CRM" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goToPage('/portfolio')}
              >
                <ListItemText primary="Что-то интересное" secondary="Ссылки, статьи и прочее" />
              </ListItem>
              
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('/analyze/report.html')}
              >
                <ListItemText primary="Анализ сборки" secondary="Webpack bundle analyzer build" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('/documentation/v1.0.0')}
              >
                <ListItemText primary="Documentation" secondary="This CRM API endpoints doc" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={openErrInModal}
              >
                <ListItemText primary="Error Boundary sample" secondary="Experience" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goToPage('/try-ui')}
              >
                <ListItemText primary="Try UI" secondary="React animations, etc." />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <ErrorInModal isOpened={isErrorImModalOpened} onClose={closeErrInModal} />
      </>
    </ResponsiveBlock>
  )
}
