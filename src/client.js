import React from 'react'
import {render} from 'react-dom'
import Router from 'react-router/lib/Router'
import hashHistory from 'react-router/lib/hashHistory'
import 'whatwg-fetch'

import routes from './routes'
import pages from './pages'
import {process} from './utils/tree'

// Rewrite pages tree.
Object.assign(pages, process(pages))

/**
 * Client side entry point for application
 */

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
)

