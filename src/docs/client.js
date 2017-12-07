import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {useBasename} from 'history'
import {jss, ThemeProvider, JssProvider} from 'common/utils/jss'
import theme from 'common/theme'
import 'whatwg-fetch'
import routes from './routes'

// TODO: Move to utils/url.js
const getCurrentPath = () => {
  const {pathname} = window.location
  return pathname.substring(0, pathname.lastIndexOf('/'))
}

const history = useBasename(() => browserHistory)({
  basename: process.browser ? getCurrentPath() : ''
})

render(
  <ThemeProvider theme={theme}>
    <JssProvider jss={jss}>
      <Router history={history} routes={routes} />
    </JssProvider>
  </ThemeProvider>,
  document.body
)

const style = document.getElementById('critical-css')
style.parentNode.removeChild(style)
