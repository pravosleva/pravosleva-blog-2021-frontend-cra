import { useEffect, useCallback } from 'react'
import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import {
  loadCrmPagesData,
  setIsModalOpened,
  loadProjectData,
} from '~/actions'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '~/store'
import { Button } from '@material-ui/core'

export const ProjectsPage = () => {
  const dispatch = useDispatch()
  const pages = useSelector((state: IRootState) => state.crmPages.pages)
  const isPagesLoading = useSelector((state: IRootState) => state.crmPages.isLoading)
  const isPagesLoaded = useSelector((state: IRootState) => state.crmPages.isLoaded)

  useEffect(() => {
    dispatch(loadCrmPagesData())
  }, [dispatch])

  const getProject = useCallback((id: string) => {
    dispatch(setIsModalOpened(true))
    dispatch(loadProjectData(id))
  }, [dispatch])


  return (
    <ResponsiveBlock isLimited={true}>
      <>
        <h1>All Projects</h1>
        {
          isPagesLoaded
          ? pages.length > 0
            ? (
              pages.map(({ id, shortName }) => (
                <Button key={id} size='small' onClick={() => getProject(id)} variant='outlined' color="primary">
                  {shortName}
                </Button>
              ))
            )
            : 'No pages yet...'
          : isPagesLoading
              ? 'Loading...'
              : 'Not loaded'
        }
        {/* <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(pages, null, 2)}</pre> */}
      </>
    </ResponsiveBlock>
  )
}