import { TCRMPage } from '~/store/reducers/crmPages'
import { useStyles } from './styles'
// import { Button } from '@material-ui/core'
import {
  setIsModalOpened,
  loadPageData,
} from '~/actions'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { getNormalizedDate } from '~/utils/timeConverter'
import { ThemedButton, EPartnerCode } from '~/common/material/ThemedButton'
import { useSpring, animated } from 'react-spring'

type TProps = {
  crmPage: TCRMPage
}

const defaultBgUrl = '/default-bg.jpg'

export const GridItem = ({ crmPage }: TProps) => {
  const { id, shortName, metadata, createdAt } = crmPage
  const classes = useStyles()
  const { shareImage, metaDescription } = metadata
  const url = shareImage?.url || defaultBgUrl
  const dispatch = useDispatch()
  const getProject = useCallback((id: string) => {
    dispatch(setIsModalOpened(true))
    dispatch(loadPageData(id))
  }, [dispatch])

  const transform = useSpring({
    from: {
      opacity: 0,
      transform: 'scale(0.95)',
      backgroundImage: `url(${url})`,
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
      backgroundImage: `url(${url})`,
    },
  })

  return (
    <animated.div
      className={classes.gridItemBg}
      key={id}
      style={transform}
    >
      <div className={classes.gridItemBox}>
        <div className={classes.gridItemTitle}><h3>{shortName}</h3></div>
        <div className={classes.gridItemDescription}>{metaDescription}</div>
        <div className={classes.gridItemAction}>
          <div>
            <ThemedButton partnerCode={EPartnerCode.Yellow} size='small' onClick={() => getProject(id)} variant='outlined' color="primary">
              Read
            </ThemedButton>
          </div>
          <div>{getNormalizedDate(createdAt)}</div>
        </div>
      </div>
    </animated.div>
  )
}