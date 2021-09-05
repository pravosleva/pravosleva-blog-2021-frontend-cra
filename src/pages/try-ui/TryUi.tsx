import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import { FlippedSample } from './components'

export const TryUi = () => {
  return (
    <ResponsiveBlock isLimited={true}>
      <>
        <h1>Try UI</h1>
        <h2>react-spring</h2>
        <FlippedSample />
      </>
    </ResponsiveBlock>
  )
}