import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '~/store'
import { Grid } from '@material-ui/core'

export const ServerInfo = () => {
  const code = useSelector((state: IRootState) => state.socket.systemSpace?.code)
  const stderr = useSelector((state: IRootState) => state.socket.systemSpace?.stderr)
  const hasErr = useMemo(() => !!stderr, [stderr])
  const siMem = useSelector((state: IRootState) => state.socket.siMem)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <h3><code>si.mem()</code></h3>
        {!!siMem ? (
          <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{JSON.stringify(siMem, null, 2)}</pre>
        ) : (
          <div>Loading...</div>
        )}
      </Grid>
      {/* hasAnything && <div><pre>{stdout || stderr}</pre></div> */}
      <Grid item xs={12} md={9}>
        <h3><code>df -H</code></h3>
        {!!code ? (
            <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{code}</pre>
          ) : (
            <div>Loading...</div>
          )
        }
      </Grid>
      {hasErr && <Grid item xs={12}><pre style={{ color: 'red', whiteSpace: 'pre-wrap' }}>{stderr}</pre></Grid>}
    </Grid>
  )
}