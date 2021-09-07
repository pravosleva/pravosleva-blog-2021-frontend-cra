import { useBaseStyles } from '~/common/material/baseStyles'
import clsx from 'clsx'
import React from 'react'
import { Container } from '@material-ui/core'
import { useStyles } from './styles'
import { useSpring, animated } from 'react-spring'

// const isDev = process.env.NODE_ENV === 'development'

type IProps = {
  isLimited?: boolean
  isPaddedMobile?: boolean
  style?: React.CSSProperties
  className?: any
  hasDesktopFrame?: boolean
  children: JSX.Element
}

export const ResponsiveBlock: React.FC<IProps> = ({ children, isLimited, isPaddedMobile, style, className, hasDesktopFrame }) => {
  const baseClasses = useBaseStyles()
  const classes = useStyles()
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  switch (true) {
    case isLimited && !isPaddedMobile && !hasDesktopFrame:
    case isLimited && !isPaddedMobile:
      return (
        <animated.div style={fade}>
          <Container style={style} maxWidth='md' className={clsx(classes.responsiveBlock, baseClasses.centered, className)}>{children}</Container>
        </animated.div>
      )
    case isLimited && hasDesktopFrame:
      return (
        <animated.div style={fade}>
          <Container style={style} maxWidth='md' className={clsx(classes.responsiveBlock, baseClasses.centered, baseClasses.noPaddedMobile, className)}>
            {children}
          </Container>
        </animated.div>
      )
    default:
      return (
        <animated.div style={fade}>
          <div
            style={style}
            // maxWidth='md'
            className={
              clsx(classes.responsiveBlock,
                {
                  [baseClasses.isPaddedMobile]: isPaddedMobile,
                },
                className
              )}
          >
            {children}
          </div>
        </animated.div>
      )
  }
}
