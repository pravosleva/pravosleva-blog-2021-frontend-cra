import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import { FlippedSample, ServerInfo } from './components'
import { SpringSlider } from '~/common/react-spring'
import { useWindowSize } from '~/common/hooks'
import Icon from '@mdi/react'
import { mdiArrowRight, mdiArrowLeft } from '@mdi/js'

export const TryUi = () => {
  const { isDesktop } = useWindowSize()

  return (
    <>
      <ResponsiveBlock>
        <SpringSlider
          autoplay={isDesktop}
          delay={5000}
          duration={800}
          leftBtnInternalRenderer={() => <Icon path={mdiArrowLeft} size={1} />}
          rightBtnInternalRenderer={() => <Icon path={mdiArrowRight} size={1} />}
        />
      </ResponsiveBlock>
      <ResponsiveBlock isLimited={true}>
        <>
          <h1>Try UI</h1>
          <h2>react-spring</h2>
          <div style={{ marginBottom: '32px' }}>
            <FlippedSample />
          </div>
        </>
      </ResponsiveBlock>
      
      <ResponsiveBlock isLimited={true}>
        <>
          <h2>Server info</h2>
          <ServerInfo />
        </>
      </ResponsiveBlock>
    </>
  )
}