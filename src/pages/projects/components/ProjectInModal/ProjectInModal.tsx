import { useDispatch, useSelector } from 'react-redux'
import { setIsModalOpened } from '~/actions'
import { IRootState } from '~/store'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Modal } from '~/common/material/Modal'
import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react'

export const ProjectInModal = () => {
  const dispatch = useDispatch()
  const isModalOpened = useSelector((state: IRootState) => state.projectInModal.isModalOpened)
  const isProjectLoading = useSelector((state: IRootState) => state.projectInModal.isLoading)
  const isProjectLoaded = useSelector((state: IRootState) => state.projectInModal.isLoaded)
  const projectData = useSelector((state: IRootState) => state.projectInModal.data)
  const closeModal = () => {
    dispatch(setIsModalOpened(false))
  }

  return (
    <Modal
      isOpened={isModalOpened}
      onClose={closeModal}
      titleRenderer={() => (
        <span>{projectData?.shortName}</span>
      )}
      maxWidth='sm'
      fullWidth
      contentRenderer={() => (
        <>
          {
            isProjectLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', color: 'lightgray' }}>
                <Icon size={4} path={mdiLoading} spin={1}/>
              </div>
            ) :
              isProjectLoaded ? (
                <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(projectData, null, 2)}</pre>
              ) : <Typography gutterBottom>Oops...</Typography>
          }
        </>
      )}
      actionsRenderer={() => (
        <Button autoFocus onClick={closeModal} color="primary">
          Close
        </Button>
      )}
    />
  )
}
