import React from 'react'
import {render} from 'react-dom'
import Router from 'react-router/lib/Router'
import hashHistory from 'react-router/lib/hashHistory'
import 'whatwg-fetch'

import routes from './routes'

/**
 * Client side entry point for application
 */

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
)

