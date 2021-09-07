import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  slide: {
    color: '#fff',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '5em',
    fontWeight: 'bold',
    letterSpacing: '0.3em',
  },

  btn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'all 0.2s linear',

    cursor: 'pointer',
    width: '50px',
    height: '50px',
    border: '2px solid #fff',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    color: '#fff',
    '&:hover': {
      transform: 'translateY(-50%) scale(1.1)',
    },
  },
  btnLeft: {
    left: '20px',
  },
  btnRight: {
    right: '20px',
  },
}))