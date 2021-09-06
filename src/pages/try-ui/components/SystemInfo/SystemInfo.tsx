import { useMemo } from 'react'
import { useSelector } from "react-redux"
import { IRootState } from "~/store"

export const SystemInfo = () => {
  const code = useSelector((state: IRootState) => state.socket.systemSpace?.code)
  // const stdout = useSelector((state: IRootState) => state.socket.systemSpace?.stdout)
  const stderr = useSelector((state: IRootState) => state.socket.systemSpace?.stderr)
  // const hasAnything = useMemo(() => !!stdout || !!stderr, [stdout, stderr])
  const hasErr = useMemo(() => !!stderr, [stderr])

  // if (!hasAnything) return <div>Please wait</div>

  return (
    <>
      {/* hasAnything && <div><pre>{stdout || stderr}</pre></div> */}
      {!!code && <div><pre style={{ whiteSpace: 'pre-wrap' }}>{code}</pre></div>}
      {hasErr && <div><pre style={{ color: 'red', whiteSpace: 'pre-wrap' }}>{code}</pre></div>}
    </>
  )
}