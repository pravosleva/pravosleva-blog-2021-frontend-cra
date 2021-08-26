import React, { useCallback } from 'react'
// import { Link } from 'react-router-dom'
import { Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './styles'
// import { useRouter } from '~/common/hooks/useRouter'
import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'

// const isDev = process.env.NODE_ENV === 'development'

export const ProjectsPage = () => {
  const classes = useStyles()
  // const router = useRouter()
  // const goToPage = useCallback(
  //   (link: string) => () => {
  //     router.push(link)
  //   },
  //   [router]
  // )
  // const goLinkThisCraProjectInThisStrapiServer = useCallback(
  //   (link: string) => () => {
  //     const newLink = isDev ? `http://localhost:1337/cra${link}` : link
  //     window.open(newLink, "_blank");
  //   },
  //   []
  // )
  const goExternalLink = useCallback(
    (link: string) => () => {
      window.open(link, "_blank");
    },
    []
  )

  return (
    <ResponsiveBlock isLimited={true}>
      <>
        <h1>Проекты</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <h2>2021</h2>
            <p>smartprice.ru</p>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://t.me/pravosleva_bot')}
              >
                <ListItemText primary="Telegram Bot @pravosleva_bot" secondary="Бот для различных опытов" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://smartprice.ru')}
              >
                <ListItemText primary="smartprice.ru" secondary="Продажа б/у смартфонов" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('http://pravosleva.ru/express-helper/qr/swagger')}
              >
                <ListItemText primary="QR Authorization" secondary="QR auth experience (password: qrdoc)" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('http://code-samples.space')}
              >
                <ListItemText primary="Code Samples 2.0" secondary="Быстрые заметки" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <h2>2020</h2>
            <p>Ремонт</p>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('http://selection4test.ru:1338/demo/')}
              >
                <ListItemText primary="My Remont 2020" secondary="Мониторинг затрат на ремонт" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <h2>2019</h2>
            <p>Анализ прогнозов команды</p>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('http://selection4test.ru:1112')}
              >
                <ListItemText primary="Team Scoring 2019" secondary="Анализ обещаний разработчиков" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <h2>2018</h2>
            <p>uremont.com</p>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://uremont.com')}
              >
                <ListItemText primary="uremont.com" secondary="Агрегатор автосервисов" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('http://selection4test.ru/projects/react-maps-lab')}
              >
                <ListItemText primary="React Google maps lab" secondary="Google maps in React experience" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <h2>2017</h2>
            <p>HVAC tools & react@15 experience</p>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://selection4test.ru/projects/auxiliary-calc')}
              >
                <ListItemText primary="Liquid parameters (UI & lib)" secondary="Расчет параметров жидкости" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://selection4test.ru/projects/thermocold-lines')}
              >
                <ListItemText primary="HEVA FC" secondary="Подбор чиллеров Thermocold линейки HEVA FC" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://selection4test.ru/projects/midea-lines')}
              >
                <ListItemText primary="HEVA FC" secondary="Подбор модульных чиллеров Midea" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <h2>2016</h2>
            <p>promventholod.ru</p>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://selection4test.ru/')}
              >
                <ListItemText primary="Cargo 2016 (Расчет загруженности фуры)" secondary="Для расстановки грузов с одинаковыми габаритами" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://selection4test.ru/projects/cargo-react')}
              >
                <ListItemText primary="Cargo 2016 (доработка)" secondary="Для расстановки грузов с разными габаритами" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://selection4test.ru/projects/total-work-time-analysis')}
              >
                <ListItemText primary="Working time" secondary="Анализ обратной связи от менеджеров отдела продаж" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://www.npmjs.com/package/liquid-parameters')}
              >
                <ListItemText primary="Liquid parameters (lib)" secondary="HVAC engineer's tool" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <h2>2015</h2>
            <p>zavodsezon.ru</p>
            <List className={classes.root} subheader={<li />}>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://selection4test.ru/projects/sezon-lines')}
              >
                <ListItemText primary="SEZON VENT" secondary="Подбор вент оборудования завода SEZON" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://www.npmjs.com/package/id-diagram')}
              >
                <ListItemText primary="id-diagram" secondary="иаграмма влажного воздуха (оцифровка)" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://www.npmjs.com/package/get-parabola')}
              >
                <ListItemText primary="get-parabola" secondary="Math functions tools" />
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={goExternalLink('https://www.npmjs.com/package/interpolate-by-pravosleva')}
              >
                <ListItemText primary="interpolate-by-pravosleva" secondary="Math interpolate lib" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </>
    </ResponsiveBlock>
  )
}
