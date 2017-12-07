import React from 'react'
import {IndexRoute, Route} from 'react-router'
import {docs as config} from 'common/config'
import App from './components/App'
import Page from './components/Page/'

/**
 * Due to moving docs in neted dir there is a difference
 * between server and client-side routes. So we use 'process'
 */

export default (
  <Route path={`/${process.browser ? config.rootDir : ''}`} component={App}>
    <IndexRoute component={Page} />
    <Route path={`${process.browser ? '' : '/'}:page`} component={Page} />
  </Route>
)