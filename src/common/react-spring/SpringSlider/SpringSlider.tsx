import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import { useStyles } from './styles'
import clsx from 'clsx'
import { MakeTimer } from '~/utils/MakeTimer'

type TProps = {
  autoplay?: boolean
  delay?: number
  duration?: number
  leftBtnInternalRenderer?: React.FC<any>
  rightBtnInternalRenderer?: React.FC<any>
  data: {
    id: number
    [key: string]: any
  }[]
  itemRenderer: React.FC<{[key: string]: any}>
}

export const SpringSlider = ({
  delay,
  autoplay,
  duration = 700,
  leftBtnInternalRenderer,
  rightBtnInternalRenderer,
  data,
  itemRenderer,
}: TProps) => {
  const countRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const activeIndexInc = useCallback(() => {
    setActiveIndex((ai) => ai < data.length - 1 ? ai + 1 : 0)
  }, [data.length])
  const activeIndexDec = useCallback(() => {
    setActiveIndex((ai) => ai > 0 ? ai - 1 : data.length - 1)
  }, [data.length])
  const prevIndexRef = useRef(-1)
  // const transRef = useSpringRef()
  const isFirstRender = () => countRef.current === 0 // || countRef.current === 1

  const transitions = useTransition(data[activeIndex], {
    // ref: transRef,
    from: {
      opacity: 0,
      transform: isFirstRender() ? 'translateY(-100%)' : activeIndex > prevIndexRef.current ? 'translateX(100%)' : 'translateX(-100%)',
    },
    enter: () => async (next, _stop) => {
      console.log(`ENTERED: ${countRef.current++}`)

      await next({ opacity: 1, transform: 'translateX(0%)' })
    },
    leave: { opacity: 0, transform: activeIndex > prevIndexRef.current ? 'translateX(-100%)' : 'translateX(100%)' },
    config: {
      duration,
    },
    onRest: () => {
      prevIndexRef.current = activeIndex
    },
  })
  const classes = useStyles()
  const isLeftDisabled = useMemo(() => activeIndex === 0, [activeIndex])
  const isRightDisabled = useMemo(() => activeIndex === data.length - 1, [activeIndex, data.length])
  const sliderTimerRef = useRef(MakeTimer(delay)())

  useEffect(() => {
    // transRef.start()
    if (autoplay) {
      sliderTimerRef.current.start(activeIndexInc)
      const cleanup = () => {
        sliderTimerRef.current.stop()
      }

      return cleanup
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // activeIndexInc, autoplay, delay
  const handleBtnHover = useCallback(() => {
    if (autoplay) sliderTimerRef.current.stop()
  }, [autoplay])
  const handleBtnLeave = useCallback((toRigth: boolean) => {
    if (autoplay) {
      sliderTimerRef.current.stop()
      sliderTimerRef.current.start(toRigth ? activeIndexInc : activeIndexDec)
    }
  }, [activeIndexInc, activeIndexDec, autoplay])

  return (
    <div style={{ position: 'relative', height: '200px' }}>
      {transitions(({ opacity, transform }, item) => (
        <animated.div
          style={{
            opacity,
            transform,

            backgroundImage: `url(${item.url})`,
            position: 'absolute',
            width: '100%',
            backgroundSize: 'cover',
            height: '100%',
          }}
          className={classes.slide}
          key={item.id}
        >
          {itemRenderer({ ...item, timer: sliderTimerRef.current })}
        </animated.div>
      ))}
      {
        !isLeftDisabled && (
          <button
            className={clsx(classes.btn, classes.btnLeft)}
            onClick={activeIndexDec}
            onMouseEnter={handleBtnHover}
            onMouseLeave={() => handleBtnLeave(false)}
            disabled={isLeftDisabled}
          >
            {!!leftBtnInternalRenderer ? (
              leftBtnInternalRenderer({ disabled: isLeftDisabled })
            ) : 'Prev'}
          </button>
        )
      }
      {
        !isRightDisabled && (
          <button
            className={clsx(classes.btn, classes.btnRight)}
            onClick={activeIndexInc}
            onMouseEnter={handleBtnHover}
            // onFocus={handleFocus}
            // onBlur={handleBlur}
            onMouseLeave={() => handleBtnLeave(true)}
            disabled={isRightDisabled}
          >
            {!!rightBtnInternalRenderer ? (
              rightBtnInternalRenderer({ disabled: isRightDisabled })
            ) : 'Next'}
          </button>
        )
      }
    </div>
  )
}