import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import { FlippedSample, ServerInfo } from './components'
import { SpringSlider } from '~/common/react-spring'

export const TryUi = () => {
  return (
    <>
      <ResponsiveBlock isLimited={true}>
        <>
          <h1>Try UI</h1>
          <h2>react-spring</h2>
          <div style={{ marginBottom: '32px' }}>
            <FlippedSample />
          </div>
        </>
      </ResponsiveBlock>
      <ResponsiveBlock>
        <SpringSlider
          autoplay
          delay={5000}
          duration={800}
        />
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