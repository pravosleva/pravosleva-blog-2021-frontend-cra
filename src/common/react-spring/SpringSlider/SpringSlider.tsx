import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import { useStyles } from './styles'
import clsx from 'clsx'
import { MakeTimer } from '~/utils/MakeTimer'

const data = [
  {
    id: 0,
    url: 'https://minuteluxe.com/wp-content/uploads/2021/05/tw-rise-of-tech.jpg',
    text: 'One',
  },
  {
    id: 1,
    url: 'https://www.channelfutures.com/files/2020/08/Global-Future-and-Technology-1.jpg',
    text: 'Two',
  },
  {
    id: 2,
    url: 'https://www.edb.gov.sg/content/dam/edb-en/insights/headquarters/southeast-asia-the-next-growth-frontier-for-tech-companies/masthead-d-1920x815.jpg',
    text: 'Three',
  },
  {
    id: 3,
    url: 'https://csis-website-prod.s3.amazonaws.com/s3fs-public/styles/csis_banner/public/publication/190215_Asia.jpg?itok=G3PNCOZH',
    text: 'Four',
  },
  {
    id: 4,
    url: 'https://knowledge.insead.edu/sites/www.insead.edu/files/images/2017/07/istock-493321081.jpg',
    text: 'Five',
  },
]

let count = 0

type TProps = {
  autoplay?: boolean
  delay?: number
  duration?: number
  leftBtnInternalRenderer?: React.FC<any>
  rightBtnInternalRenderer?: React.FC<any>
}

export const SpringSlider = ({
  delay,
  autoplay,
  duration = 700,
  leftBtnInternalRenderer,
  rightBtnInternalRenderer,
}: TProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const activeIndexInc = useCallback(() => {
    setActiveIndex((ai) => ai < data.length - 1 ? ai + 1 : 0)
  }, [setActiveIndex])
  const activeIndexDec = useCallback(() => {
    setActiveIndex((ai) => ai > 0 ? ai - 1 : data.length - 1)
  }, [setActiveIndex])
  const prevIndexRef = useRef(-1)
  // const transRef = useSpringRef()

  const transitions = useTransition(data[activeIndex], {
    // ref: transRef,
    from: { opacity: 0, transform: activeIndex > prevIndexRef.current ? `translateX(100%)` : `translateX(-100%)` },
    enter: () => async (next, _stop) => {
      console.log(`ENTERED: ${count++}`)
      
      await next({ opacity: 1, transform: `translateX(0%)` })
    },
    leave: { opacity: 0, transform: activeIndex > prevIndexRef.current ? `translateX(-100%)` : `translateX(100%)` },
    config: {
      duration,
    },
    onRest: () => {
      prevIndexRef.current = activeIndex
    },
  })
  const classes = useStyles()
  const isLeftDisabled = useMemo(() => activeIndex === 0, [activeIndex])
  const isRightDisabled = useMemo(() => activeIndex === data.length - 1, [activeIndex])

  const sliderTimerRef = useRef(null)

  useEffect(() => {
    // transRef.start()
    if (autoplay) {
      sliderTimerRef.current = MakeTimer(delay)()
      sliderTimerRef.current.startTimer(() => {
        activeIndexInc()
      })
      const cleanup = () => {
        sliderTimerRef.current.stopTimer()
      }

      return cleanup
    }
  }, [activeIndexInc, autoplay, delay])
  const handleBtnHover = useCallback(() => {
    if (autoplay) sliderTimerRef.current.stopTimer()
  }, [autoplay])
  const handleBtnLeave = useCallback(() => {
    if (autoplay) sliderTimerRef.current.startTimer(() => {
      activeIndexInc()
    })
  }, [activeIndexInc, autoplay])

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
            {item.text}
        </animated.div>
      ))}
      {
        !isLeftDisabled && (
          <button
            className={clsx(classes.btn, classes.btnLeft)}
            onClick={activeIndexDec}
            onMouseEnter={handleBtnHover}
            onMouseLeave={handleBtnLeave}
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
            onMouseLeave={handleBtnLeave}
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