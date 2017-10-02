import React from 'react'
import {render} from 'react-dom'
import App from './components/App'

render(
  <App />,
  document.body
)

const style = document.getElementById('critical-css')
style.parentNode.removeChild(style)
