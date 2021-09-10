import ReactDOM from 'react-dom';
import '~/index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import 'animate.css/animate.min.css'
// import 'react-lightbox-component/build/css/index.css'
import { SiteLayout } from '~/common/material/SiteLayout'
import { theme } from '~/common/material/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { GlobalCss } from '~/common/material/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import { store } from '~/store'
import { Toaster } from '~/common/material/Toaster'
import { App } from './App'
import './fix.prismjs.scss'
import './fix.simple-react-lightbox.scss'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalCss />
    <Router>
      <Provider store={store}>
        <Toaster />
        <SiteLayout>
          <App />
        </SiteLayout>
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
