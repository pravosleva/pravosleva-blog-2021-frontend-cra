import { makeStyles } from '@material-ui/core/styles'
// import grey from '@material-ui/core/colors/grey'
// import { contentBottomMargin, breadCrumbsHeight, siteHeaderHeight } from '~/common/mui/baseStyles'
import red from '@material-ui/core/colors/red'
// import green from '@material-ui/core/colors/green'

export const useStyles = makeStyles((theme) => ({
  srLWrapperLayout: {
    // border: '1px solid red',
    '& > div': {
      // display: 'flex',
      // flexWrap: 'wrap',

      // GRID:
      display: 'grid',
      columnGap: '8px',
      rowGap: '8px',

      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
      },
      gridAutoFlow: 'dense',
    },
    '& > div > div.grid-item': {
      borderRadius: '8px',
    },
    '& > div > div.grid-item > a': {
      // width: '100%',
      // maxWidth: 'calc(33% - 1px)',
      // display: 'block',
      // height: 'auto',
      // margin: '0 0 1px 0',
      // borderRadius: '4px',

      // GRID ITEM:
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        height: '85px',
      },
      [theme.breakpoints.up('md')]: {
        height: '120px',
      },
      textDecoration: 'none',
      color: 'inherit',
      borderRadius: '8px',
      // [theme.breakpoints.up('md')]: { maxWidth: '265px' },
    },
    // EDITABLE:
    '& > div > div.grid-item > a.editable, & > div > div.grid-item > a.editable > img': {
      borderBottomLeftRadius: '0px ',
      borderBottomRightRadius: '0px ',
    },
    // DEL BTN:
    '& > div > div.grid-item > a.editable + div.del-btn': {
      textAlign: 'right',
      padding: theme.spacing(1),
      cursor: 'pointer',
      borderRadius: 'inherit',
      borderTopLeftRadius: '0px ',
      borderTopRightRadius: '0px ',
      transition: 'all 0.2s linear',

      backgroundColor: red[500],
      color: '#FFF',
    },
    '& > div > div.grid-item > a.editable + div.del-btn:hover': {
      backgroundColor: 'rgba(244, 67, 54, 0.5)',
    },

    '& > div > div.grid-item > a > img': {
      // border: '2px solid transparent',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '8px',
      transition: 'all 0.3s linear',
    },
    '& > div > div.grid-item > a:not(.editable):hover': {
      [theme.breakpoints.up('md')]: {
        transform: 'translateY(-2px)',
      },
    },
    '& > div > div.grid-item > a:not(.editable):hover > img': {
      boxShadow: '0px 2px 8px rgba(144, 164, 183, 0.3)',
      // border: '2px solid #FFF',
      // border: '2px solid #556cd6',
      // scale: 1.1,
    },
  },
  galleryWrapper: {
    maxWidth: '100%',
    // border: '1px solid red',
    // '& > div': { border: '1px solid red' },
    // marginBottom: theme.spacing(1),
  },
}))
