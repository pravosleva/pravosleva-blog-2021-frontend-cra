import { TCRMPage } from '~/store/reducers/crmPages'
import { useStyles } from './styles'
import { GridItem } from './GridItem'

export const ProjectsGrid = ({ projects }: { projects: TCRMPage[] }) => {
  const classes = useStyles()
  

  return (
    <div className={classes.wrapper}>
      {
        projects.map((crmPage) => <GridItem key={crmPage.id} crmPage={crmPage} />)
      }
    </div>
  )
}