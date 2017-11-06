import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import {jss, ThemeProvider, JssProvider} from 'common/utils/jss'
import theme from 'common/theme'
import 'whatwg-fetch'

render(
  <ThemeProvider theme={theme}>
    <JssProvider jss={jss}>
      <Router history={browserHistory} routes={routes} />
    </JssProvider>
  </ThemeProvider>,
  document.body
)

const style = document.getElementById('critical-css')
style.parentNode.removeChild(style)
