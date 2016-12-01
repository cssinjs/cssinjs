import React from 'react'
import {render} from 'react-dom'

import {Router, hashHistory} from 'react-router'

import routes from './routes'

/**
 * Client side entry point for application
 */

render(<Router history={hashHistory} routes={routes} />, document.getElementById('root'), () => {
  const serverStyles = document.getElementById('server-side-styles')
  serverStyles.parentNode.removeChild(serverStyles)
})

