import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import { Flipped } from '~/common/react-spring'

export const TryUi = () => {
  return (
    <ResponsiveBlock isLimited={true}>
      <>
        <h1>Try UI</h1>
        <h2>react-spring</h2>
        <Flipped
          cardStyles={{
            cursor: 'pointer',
            borderRadius: '8px',
            width: '150px',
            height: '150px',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          frontRenderer={({ isFlipped }) => (
            <div>FRONT<br />isFlipped = {String(isFlipped)}</div>
          )}
          backRenderer={({ isFlipped }) => (
            <div>BACK<br />isFlipped = {String(isFlipped)}</div>
          )}
        />
      </>
    </ResponsiveBlock>
  )
}