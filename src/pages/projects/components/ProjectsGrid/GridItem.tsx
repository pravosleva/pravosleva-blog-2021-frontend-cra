import { TCRMPage } from '~/store/reducers/crmPages'
import { useStyles } from './styles'
// import { Button } from '@material-ui/core'
import {
  setIsModalOpened,
  loadProjectData,
} from '~/actions'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { getNormalizedDate } from '~/utils/timeConverter'
import { ThemedButton, EPartnerCode } from '~/common/material/ThemedButton'

type TProps = {
  crmPage: TCRMPage
}

export const GridItem = ({ crmPage }: TProps) => {
  const { id, shortName, metadata, createdAt } = crmPage
  const classes = useStyles()
  const { shareImage: { url }, metaDescription } = metadata
  const dispatch = useDispatch()
  const getProject = useCallback((id: string) => {
    dispatch(setIsModalOpened(true))
    dispatch(loadProjectData(id))
  }, [dispatch])

  return (
    <div
      className={classes.gridItemBg}
      key={id}
      style={{
        backgroundImage: `url(${url})`,
      }}
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
    </div>
  )
}