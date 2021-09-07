import { Flipped } from '~/common/react-spring'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    relGrid: {
      display: 'grid',
      columnGap: theme.spacing(2),
      rowGap: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
      },
      gridAutoFlow: 'dense',
    },
    gridItem: {
      width: '100%',
      height: '100px'
    },
  }),
);
const cardStyles = {
  cursor: 'pointer',
  borderRadius: '8px',
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const wrapperStyles = {
  height: '100%',
}

export const FlippedSample = () => {
  const classes = useStyles()

  return (
    <div className={classes.relGrid}>
      <div className={classes.gridItem}>
        <Flipped
          wrapperStyles={wrapperStyles}
          cardStyles={cardStyles}
          frontRenderer={({ isFlipped }) => (
            <div>FRONT<br />isFlipped = {String(isFlipped)}</div>
          )}
          backRenderer={({ isFlipped }) => (
            <div>BACK<br />isFlipped = {String(isFlipped)}</div>
          )}
        />
      </div>
      <div className={classes.gridItem}>
        <Flipped
          wrapperStyles={wrapperStyles}
          cardStyles={cardStyles}
          frontRenderer={({ isFlipped }) => (
            <div>FRONT<br />isFlipped = {String(isFlipped)}</div>
          )}
          backRenderer={({ isFlipped }) => (
            <div>BACK<br />isFlipped = {String(isFlipped)}</div>
          )}
        />
      </div>
    </div>
  )
}