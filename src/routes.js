import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import Page from './components/Page/'

import {getHomeLink} from './helpers/pagesActions'

/**
 * Application routes description
 */

const indexRouteAction = (nextState, replace) => {
  if (!nextState.params.page) {
    replace(getHomeLink())
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute onEnter={indexRouteAction} />
    <Route path="/:page" component={Page} />
  </Route>
)
