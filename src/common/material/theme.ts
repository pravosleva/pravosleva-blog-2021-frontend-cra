import red from '@material-ui/core/colors/red'
import {
  createTheme,
  withStyles,
  Theme,
} from '@material-ui/core/styles'
import { AnyRecord } from 'dns'
// import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
// See also: https://material-ui.com/guides/typescript/#customization-of-theme

// Like this: https://github.com/mui-org/material-ui/blob/master/examples/create-react-app-with-typescript/src/theme.tsx
// See also: https://material-ui.com/ru/styles/basics/
export const defaultTheme: any = {
  palette: {
    primary: {
      // light: '#58B3F9',
      main: '#2196f3',
      // dark: '#245376',
      // contrastText: '#004eb6',
    },
    secondary: {
      main: '#a2acbd',
      // light: '#ff7961',
      // dark: '#3f4756',
      // contrastText: '#000',
    },
    error: {
      main: '#f85e54', // red.A400,
      // light: '#ff7961',
      // dark: '#3f4756',
      // contrastText: '#000',
    },
    background: {
      default: '#fff',
      // paper: 'red',
    },
    // svyaznoy: {
    //   main: '#4c1e87',
    //   yellow: '#ffc800',
    //   light: '#757ce8',
    //   dark: '#002884',
    //   contrastText: '#fff',
    // },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
}

export const { breakpoints: { values: { md } } } = defaultTheme

export const GlobalCss = withStyles((theme) => ({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiButton-root': {
      outline: 'none !important',
      userSelect: 'none !important',
    },
    // See also: https://material-ui.com/ru/customization/components/
    code: {
      background: theme.palette.primary.light,
      // boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.2)',
      color: '#FFF',
      padding: '3px 6px',
      borderRadius: '5px',
      margin: '0 1px',
      fontSize: '0.9em',
      fontWeight: 'bold',
      letterSpacing: '0.3px',
    },
    'code[class*=\'language-\']': {
      fontWeight: 'inherit',
    },
    body: {
      overflowX: 'hidden',
    },
    a: {
      color: theme.palette.primary.main,
    },
    h1: {
      margin: theme.spacing(3, 0, 2, 0),
    },
    blockquote: {
      // quotes: '"“" "”" "‘" "’"',
      quotes: '"“" "”" "“" "”"',
      fontSize: '1em',
      maxWidth: theme.breakpoints.values.sm,
      borderRadius: '8px',
      margin: '10px auto 20px auto',
      // fontFamily: 'Open Sans',
      // fontStyle: 'italic',
      color: '#555555',
      // padding: '1.2em 30px 1.2em 45px',
      padding: theme.spacing(2, 1, 2, 5),
      borderLeft: `${theme.spacing(1)}px solid #78c0a8`,
      // borderLeftColor: theme.palette.primary.main,
      borderLeftColor: 'lightgray',
      lineHeight: 1.6,
      position: 'relative',
      background: '#ededed',
      '&::before': {
        fontFamily: 'Arial',
        content: 'open-quote',
        // color: theme.palette.primary.main,
        color: 'lightgray',
        fontSize: '4em',
        position: 'absolute',
        left: '10px',
        top: '-10px',
      },
      '& p': {
        margin: 0,
      }
    },
  },
}))(() => null)

export const theme: Theme = createTheme(defaultTheme)
