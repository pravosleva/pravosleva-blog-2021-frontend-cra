import React, { useState, useRef, useCallback } from 'react'
import { TextField, Button, Grid } from '@material-ui/core';
import { Modal } from '~/common/material/Modal'
import Alert from '@material-ui/lab/Alert'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '~/common/material/ErrorFallback'

type TProps = {
  isOpened: boolean
  onClose: () => void
}

const Bomb = ({ text }) => {
  if (text === 'boom') throw new Error('💥 BOOM 💥')
  return null
}

export const ErrorInModal = ({ isOpened, onClose }: TProps) => {
  const [text, setText] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const textRef = useRef(null)
  const handleClearText = useCallback(() => {
    setText('')
    if (!!textRef.current) textRef.current.focus()
  }, [setText])

  return (
    <Modal
      isOpened={isOpened}
      onClose={onClose}
      titleRenderer={() => (
        <span>Error Boundary sample</span>
      )}
      maxWidth='xs'
      fullWidth
      contentRenderer={() => (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField inputRef={textRef} id="outlined-basic" size='small' fullWidth label="Text" variant="outlined" value={text} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={handleClearText}
              >
                <Bomb text={text} />
                <Alert className="info" variant="outlined" severity="info">
                  Enter <code>boom</code> for have error
                </Alert>
              </ErrorBoundary>
            </Grid>
          </Grid>
        </>
      )}
      actionsRenderer={() => (
        <Button autoFocus onClick={onClose} color="primary">
          Close
        </Button>
      )}
    />
  )
}