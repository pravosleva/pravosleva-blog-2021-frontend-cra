import { makeStyles } from '@material-ui/core/styles'

const sliderHeight = 350

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    // [theme.breakpoints.down('sm')]: {
    //   position: 'relative',
    // },
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45px',
    // height: '45px',
    // borderRadius: '50%',
    height: `${sliderHeight}px`,
    border: 'none',
    transition: 'all 0.3s linear',
    // backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
    '&:focus': {
      outline: 'none',
      // boxShadow: '0 0 0 5px rgba(21, 156, 228, 0.4)',
    },
    // zIndex: 1,
    // [theme.breakpoints.down('sm')]: {
    //   position: 'absolute',
    //   top: '0',
    // },
  },
  btnDisabled: {
    opacity: 0.5,
  },
  img: {
    width: '100%',
    // border: '1px solid red',
    maxHeight: `${sliderHeight}px`,
    minHeight: `${sliderHeight}px`,
    [theme.breakpoints.down('sm')]: {
      objectFit: 'scale-down',
      // position: 'absolute',
      // width: 'calc(100% + 90px)',
      // border: '1px solid blue',
    },
    [theme.breakpoints.up('md')]: {
      objectFit: 'contain',
    },
  },
}))