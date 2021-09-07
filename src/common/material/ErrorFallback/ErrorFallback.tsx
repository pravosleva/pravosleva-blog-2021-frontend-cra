import Alert from '@material-ui/lab/Alert'
import { Button } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

type TProps = {
  resetErrorBoundary: () => void
  error: Error
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      '& > *:first-child': {
        marginRight: theme.spacing(2)
      },
    },
  }),
);

export const ErrorFallback = ({ error, resetErrorBoundary }: TProps) => {
  const classes = useStyles()
  const { message } = error

  return (
    <Alert variant="outlined" severity="error" title="Oops">
      <div className={classes.flexContainer}>
        <div>{message}</div>
        <Button size='small' autoFocus onClick={resetErrorBoundary} variant='outlined' color="primary">
          Try again
        </Button>
      </div>
    </Alert>
  )
}