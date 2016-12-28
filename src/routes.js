import React from 'react'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'

import App from './components/App'
import Page from './components/Page/'

import {getHomeUrl} from './helpers/pagesActions'

/**
 * Application routes description
 */

const indexRouteAction = (nextState, replace) => {
  if (!nextState.params.page) {
    replace(getHomeUrl())
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute onEnter={indexRouteAction} />
    <Route path="/:page" component={Page} />
  </Route>
)
