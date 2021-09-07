import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  slide: {
    color: '#fff',
    userSelect: 'none',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '5em',
    fontWeight: 'bold',
    letterSpacing: '0.3em',
  },

  btn: {
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'all 0.2s linear',

    cursor: 'pointer',
    width: '50px',
    height: '50px',
    [theme.breakpoints.down('sm')]: {
      border: 'none',
    },
    [theme.breakpoints.up('md')]: {
      border: '2px solid #fff',
    },
    borderRadius: '50%',
    backgroundColor: 'transparent',
    color: '#fff',
    '&:hover': {
      transform: 'translateY(-50%) scale(1.1)',
    },
    '&:disabled': {
      opacity: 0.5,
    },
  },
  btnLeft: {
    [theme.breakpoints.down('sm')]: {
      left: theme.spacing(0),
    },
    [theme.breakpoints.up('md')]: {
      left: theme.spacing(4),
    },
  },
  btnRight: {
    [theme.breakpoints.down('sm')]: {
      right: theme.spacing(0),
    },
    [theme.breakpoints.up('md')]: {
      right: theme.spacing(4),
    },
  },
}))