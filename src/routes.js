import React from 'react'
import {Route} from 'react-router'

import App from './components/App'
import Page from './components/Page/'

export default (
  <Route path="/" component={App}>
    <Route path="/" component={Page} />
    <Route path="/:page" component={Page} />
  </Route>
)
