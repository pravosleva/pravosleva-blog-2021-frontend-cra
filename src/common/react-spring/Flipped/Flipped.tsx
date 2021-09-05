import React, { useState, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { CSSProperties } from '@material-ui/styles';
import clsx from 'clsx'

type TProps = {
  frontRenderer: React.FC<any>
  backRenderer: React.FC<any>
  cardStyles: CSSProperties
  wrapperClassName?: string
  wrapperStyles?: CSSProperties
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rel: {
      position: 'relative',
    },
    abs: {
      position: 'absolute',
      willChange: 'transform, opacity',
    },
  }),
);

export const Flipped = ({ frontRenderer, backRenderer, cardStyles, wrapperStyles, wrapperClassName }: TProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  const toggleFlip = useCallback(() => {
    setIsFlipped((s) => !s)
  }, [setIsFlipped])
  // const hadleFlipOn = useCallback(() => {
  //   setIsFlipped(true)
  // }, [setIsFlipped])
  // const hadleFlipOff = useCallback(() => {
  //   setIsFlipped(false)
  // }, [setIsFlipped])
  const { opacity, transform } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
  })
  const classes = useStyles()

  return (
    <div
      // onMouseEnter={hadleFlipOn}
      // onMouseLeave={hadleFlipOff}
      onClick={toggleFlip}
      className={clsx(classes.rel, wrapperClassName)}
      style={wrapperStyles || {}}
    >
      <animated.div
        className={classes.abs}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          ...cardStyles
        }}
      >
        {frontRenderer({ isFlipped })}
      </animated.div>
      <animated.div
        className={classes.abs}
        style={{
          opacity,
          transform: transform.to(t => `${t} rotateX(180deg)`),
          ...cardStyles
        }}
      >
        {backRenderer({ isFlipped })}
      </animated.div>
    </div>
  )
}