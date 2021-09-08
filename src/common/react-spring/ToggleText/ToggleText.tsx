import { useState } from 'react'
import { useTransition, config, animated } from 'react-spring'

type TProps = {
  two: [string, string]
}

export function ToggleText({ two }: TProps) {
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 3000,
    config: config.molasses,
    onRest: () => set(!toggle),
  })

  return transitions(({ opacity }, item) =>
    item ? (
      <animated.span
        style={{
          // position: 'absolute',
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          whiteSpace: 'pre',
          display: 'block',
        }}>
        {two[0]}
      </animated.span>
    ) : (
      <animated.span
        style={{
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
          whiteSpace: 'pre',
          display: 'block',
        }}>
        {two[1]}
      </animated.span>
    )
  )
}