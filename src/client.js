import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import 'whatwg-fetch'

import routes from './routes'

const container = document.createElement('div')
container.style.height = '100%'

render(
  <Router history={browserHistory} routes={routes} />,
  document.body.appendChild(container)
)

