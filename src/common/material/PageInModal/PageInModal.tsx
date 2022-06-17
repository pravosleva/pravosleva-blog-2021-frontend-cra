import { useDispatch, useSelector } from 'react-redux'
import { setIsModalOpened, loadPageData } from '~/actions'
import { IRootState } from '~/store'
import Button from '@material-ui/core/Button'
import { Modal } from '~/common/material/Modal'
import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react'
import { Content } from './components'
import { useEffect, useMemo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'
import styles from './PageInModal.module.scss'
import { getNormalizedDate } from '~/utils/timeConverter'

export const PageInModal = () => {
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
  console.log(projectData)

  }, [projectData])

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)

    if(!!queryParams.has('open')) {
      const openId = queryParams.get('open')

      dispatch(setIsModalOpened(true))
      dispatch(loadPageData(openId))
      queryParams.delete('open')
      history.replace({
        search: queryParams.toString(),
      })
    }
  }, [dispatch, location.search, history])
  const bgImg = useMemo(() => {
    return projectData?.metadata.shareImage?.formats?.large
      || projectData?.metadata.shareImage?.formats?.medium
      || projectData?.metadata.shareImage?.formats?.small
      || projectData?.metadata.shareImage?.formats?.thumbnail
      || null
  }, [projectData])

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {
            !!bgImg && (
              <div
                className={styles['img-preview-wrapper']}
                style={{
                  minHeight: '100px',
                  backgroundImage: `url(${bgImg.url})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  marginBottom: '8px',
                }}
              >
                <div
                  className={styles['img-preview-container']}
                  style={{
                    background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))',
                    height: '100%',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <h1 className={styles['title']} style={{ marginBottom: '24px' }}>{isProjectLoaded ? projectData?.metadata.metaDescription : (isProjectLoading ? 'Please wait...' : 'Sorry')}</h1>
                  <div className={styles['created-updated-box']}>
                    <div>Created {getNormalizedDate(projectData.createdAt)}</div>
                    <div>Updated {getNormalizedDate(projectData.updatedAt)}</div>
                  </div>
                </div>
              </div>
            )
          }
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
