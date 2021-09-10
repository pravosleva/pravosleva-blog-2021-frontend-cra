import { useEffect } from 'react'
import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import {
  loadCrmPagesData,
} from '~/actions'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '~/store'
import { PagesGrid } from '~/common/material/PagesGrid'
import { ToggleText } from '~/common/react-spring'

export const ArticlesPage = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state: IRootState) => state.crmPages.articles)
  const isPagesLoading = useSelector((state: IRootState) => state.crmPages.isLoading)
  const isPagesLoaded = useSelector((state: IRootState) => state.crmPages.isLoaded)

  useEffect(() => {
    dispatch(loadCrmPagesData())
  }, [dispatch])

  return (
    <ResponsiveBlock isLimited={true}>
      <>
        <h1 style={{ display: 'flex' }}><span>All</span><span>&nbsp;</span><ToggleText two={['Articles 🏷', 'Ideas 🔥']} /></h1>
        {
          isPagesLoaded
          ? articles.length > 0
            ? <PagesGrid pages={articles} />
            : 'No pages yet...'
          : isPagesLoading
              ? 'Loading...'
              : 'Not loaded'
        }
      </>
    </ResponsiveBlock>
  )
}