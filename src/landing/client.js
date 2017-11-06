import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {jss, ThemeProvider, JssProvider} from 'common/utils/jss'
import theme from 'common/theme'

render(
  <ThemeProvider theme={theme}>
    <JssProvider jss={jss}>
      <App />
    </JssProvider>
  </ThemeProvider>,
  document.body
)

const style = document.getElementById('critical-css')
style.parentNode.removeChild(style)
