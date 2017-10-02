import React from 'react'
import {IndexRoute, Route} from 'react-router'

import {docs as config} from 'common/config'

import App from './components/App'
import Page from './components/Page/'

const {rootDir} = config

export default (
  <Route path={`/${rootDir}`} component={App}>
    <IndexRoute component={Page} />
    <Route path={rootDir ? `/${rootDir}/:page` : '/:page'} component={Page} />
  </Route>
)
