import { useDispatch, useSelector } from 'react-redux'
import { setIsModalOpened, loadProjectData } from '~/actions'
import { IRootState } from '~/store'
import Button from '@material-ui/core/Button'
import { Modal } from '~/common/material/Modal'
import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react'
import { Content } from './components'
import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'

export const ProjectInModal = () => {
  const dispatch = useDispatch()
  const isModalOpened = useSelector((state: IRootState) => state.projectInModal.isModalOpened)
  const isProjectLoading = useSelector((state: IRootState) => state.projectInModal.isLoading)
  const isProjectLoaded = useSelector((state: IRootState) => state.projectInModal.isLoaded)
  const projectData = useSelector((state: IRootState) => state.projectInModal.data)
  const errMsg = useSelector((state: IRootState) => state.projectInModal.errMsg)
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
        <span>{isProjectLoaded ? projectData?.shortName : (isProjectLoading ? 'Please wait...' : 'Sorry')}</span>
      )}
      maxWidth={!!errMsg || isProjectLoading ? 'sm' : 'md'}
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
              ) : (
                <Alert variant="outlined" severity="error" title="Oops...">
                  {errMsg || 'Что-то пошло не так'}
                </Alert>
              )
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
