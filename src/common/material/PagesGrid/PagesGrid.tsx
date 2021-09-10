import { TCRMPage } from '~/store/reducers/crmPages'
import { useStyles } from './styles'
import { GridItem } from './GridItem'

export const PagesGrid = ({ pages }: { pages: TCRMPage[] }) => {
  const classes = useStyles()
  
  return (
    <div className={classes.wrapper}>
      {
        pages.map((crmPage) => <GridItem key={crmPage.id} crmPage={crmPage} />)
      }
    </div>
  )
}