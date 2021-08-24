import React, { useCallback } from 'react'
// import { Link } from 'react-router-dom'
import { Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './styles'
import { useRouter } from '~/common/hooks/useRouter'
import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'

const isDev = process.env.NODE_ENV === 'development'

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
      const newLink = isDev ? `http://localhost:1337/cra${link}` : link
      window.open(newLink, "_blank");
    },
    []
  )

  return (
    <ResponsiveBlock isLimited={true}>
      <>
        <h1>Home</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={goToPage('/articles')}
              >
                <ListItemText primary="Все статьи" secondary="All articles" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('/analyze/report.html')}
              >
                <ListItemText primary="Анализ сборки" secondary="Bundle analyzer" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </>
    </ResponsiveBlock>
  )
}
