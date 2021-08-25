import { ConfirmProvider } from 'material-ui-confirm'
import { PromptProvider } from '~/common/hooks/usePrompt'
import Headroom from 'react-headroom'
import { useStyles } from './styles'
import {
  siteHeaderHeight,
} from '~/common/material/baseStyles'
import { SiteHeader } from './components/SiteHeader'
import { BreadCrumbs } from './components/BreadCrumbs'
import { FixedScrollTopButton } from './components/FixedScrollTopButton'
import { Footer } from './components/Footer'
import clsx from 'clsx'

export const SiteLayout = ({ children }: any) => {
  const classes = useStyles()

  return (
    <PromptProvider>
      <ConfirmProvider>
        <div className={classes.bg}>
          <Headroom
            style={{
              width: '100%',
              zIndex: 6,
              margin: '0 auto',
              padding: '0px',
              height: `${siteHeaderHeight.desktop}px`,
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid lightgray',
              backgroundColor: '#FFF',
            }}
          >
            <SiteHeader />
          </Headroom>
          <div className={classes.breadcrumbs}>
            <BreadCrumbs />
          </div>
          <div className={clsx(classes.content)}>{children}</div>
          <Footer />
        </div>
        <FixedScrollTopButton />
      </ConfirmProvider>
    </PromptProvider>
  )
}