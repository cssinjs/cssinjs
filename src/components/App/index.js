import React from 'react'
import {RouteTransition, presets} from 'react-router-transition'

import Sidebar from '../Sidebar'

import {getHomeUrl} from '../../helpers/pagesActions'
import injectSheet from '../../utils/jss'
import styles from './styles'

/**
 * Main application wrapper component.
 * All pages render starts here
 */
const App = (data) => {
  const {children, location, sheet} = data
  const {classes} = sheet
  const homeUrl = getHomeUrl()

  // Set in what direction content must move when page changes
  const transitionStyles = location.action === 'POP' ? presets.slideRight : presets.slideLeft

  // Check if is homepage - and pass params to child components
  if (typeof data.location.state === 'undefined') data.location.state = {}
  if (data.location.pathname === homeUrl) {
    data.location.state = {}
    data.location.state.home = true
  }

  return (
    <div className={classes.app}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.content}>
        <RouteTransition
          className={classes.contentInner}
          pathname={location.pathname}
          {...transitionStyles}
        >
          {React.cloneElement(children, {
            key: location.pathname,
            home: data.location.state.home
          })}
        </RouteTransition>
      </div>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
  sheet: React.PropTypes.object
}

export default injectSheet(styles)(App)
