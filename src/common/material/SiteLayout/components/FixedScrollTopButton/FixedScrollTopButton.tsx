import React, { useRef, useCallback, useEffect } from 'react'
import {
  useScrollPosition,
  IWindowDims,
} from '~/common/hooks/useScrollPosition'
import clsx from 'clsx'
import { useStyles } from './styles'
import { scrollTop } from '~/utils/scrollTo'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useRouter } from '~/common/hooks'

export const FixedScrollTopButton = () => {
  const [, isMoreThan2Screens]: [IWindowDims, boolean] = useScrollPosition();
  const classes = useStyles()
  const ref = useRef(null)
  const handleClick = useCallback(() => {
    scrollTop()
  }, [])
  const router = useRouter()

  useEffect(() => {
    scrollTop(true)
  }, [router.pathname])

  return (
    <>
      {typeof window !== 'undefined' && (
        <div
          ref={ref}
          onClick={handleClick}
          className={clsx(classes.main, { [classes.isRequired]: isMoreThan2Screens })}
        >
          <KeyboardArrowUpIcon color='action' />
        </div>
      )}
    </>
  );
};
