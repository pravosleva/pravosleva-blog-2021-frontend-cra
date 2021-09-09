import { useState, useEffect } from 'react'

type TProps = {
  dateStart: Date
  onDone?: () => void
  waitMsg?: string
  doneMsg?: string
}

export const StateCounterSample = ({ dateStart, onDone, waitMsg, doneMsg }: TProps) => {
  const [state, setState] = useState<string>(waitMsg || 'Waiting...')

  useEffect(() => {

    const now = new Date()
    const diff = dateStart.getTime() - now.getTime()
    
    if (diff > 0) {
      const done = () => {
        setState(doneMsg || 'Time left')
        if (!!onDone) onDone()
      }
      const toID = setTimeout(done, diff)

      return () => {
        clearTimeout(toID)
      }
    } else {
      setState(doneMsg || 'Alreary')
    }
  }, [dateStart, onDone, waitMsg, doneMsg])

  return (
    <span>{state}</span>
  )
}