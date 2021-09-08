import { useEffect } from 'react'
import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import {
  loadCrmPagesData,
} from '~/actions'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '~/store'
import { ProjectsGrid } from './components'
import { ToggleText } from '~/common/react-spring'

export const ProjectsPage = () => {
  const dispatch = useDispatch()
  const pages = useSelector((state: IRootState) => state.crmPages.pages)
  const isPagesLoading = useSelector((state: IRootState) => state.crmPages.isLoading)
  const isPagesLoaded = useSelector((state: IRootState) => state.crmPages.isLoaded)

  useEffect(() => {
    dispatch(loadCrmPagesData())
  }, [dispatch])

  return (
    <ResponsiveBlock isLimited={true}>
      <>
        <h1 style={{ display: 'flex' }}><span>All</span><span>&nbsp;</span><ToggleText two={['Projects 🧨', 'Ideas 🔥']} /></h1>
        {
          isPagesLoaded
          ? pages.length > 0
            ? <ProjectsGrid projects={pages} />
            : 'No pages yet...'
          : isPagesLoading
              ? 'Loading...'
              : 'Not loaded'
        }
      </>
    </ResponsiveBlock>
  )
}