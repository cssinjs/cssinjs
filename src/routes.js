import React from 'react'
import {IndexRoute, Route} from 'react-router'

import App from './containers/App'
import Page from './components/Page/'

export default (routeProps) => (
  <Route path="/" component={(renderProps) => <App {...renderProps} {...routeProps} />}>
    <IndexRoute component={Page} />
    <Route path="/:page" component={Page} />
  </Route>
)
