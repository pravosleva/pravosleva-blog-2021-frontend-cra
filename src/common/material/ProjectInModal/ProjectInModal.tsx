import { useDispatch, useSelector } from 'react-redux'
import { setIsModalOpened, loadProjectData } from '~/actions'
import { IRootState } from '~/store'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Modal } from '~/common/material/Modal'
import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react'
import { Content } from './components'
import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export const ProjectInModal = () => {
  const dispatch = useDispatch()
  const isModalOpened = useSelector((state: IRootState) => state.projectInModal.isModalOpened)
  const isProjectLoading = useSelector((state: IRootState) => state.projectInModal.isLoading)
  const isProjectLoaded = useSelector((state: IRootState) => state.projectInModal.isLoaded)
  const projectData = useSelector((state: IRootState) => state.projectInModal.data)
  const closeModal = () => {
    dispatch(setIsModalOpened(false))
  }
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)

    if(!!queryParams.has('open')) {
      const openId = queryParams.get('open')

      dispatch(setIsModalOpened(true))
      dispatch(loadProjectData(openId))
      queryParams.delete('open')
      history.replace({
        search: queryParams.toString(),
      })
    }
  }, [dispatch, location.search, history])

  return (
    <Modal
      isOpened={isModalOpened}
      onClose={closeModal}
      titleRenderer={() => (
        <span>{projectData?.shortName || 'Please wait...'}</span>
      )}
      maxWidth='md'
      fullWidth
      contentRenderer={() => (
        <div>
          {
            isProjectLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', color: 'lightgray' }}>
                <Icon size={4} path={mdiLoading} spin={1}/>
              </div>
            ) :
              isProjectLoaded ? (
                <Content sections={projectData.contentSections} />
              ) : <div style={{ minHeight: '200px' }}><Typography gutterBottom>Oops...</Typography></div>
          }
        </div>
      )}
      actionsRenderer={() => (
        <Button autoFocus onClick={closeModal} color="primary">
          Close
        </Button>
      )}
    />
  )
}
