import React from 'react'
import {RouteTransition, presets} from 'react-router-transition'

import Sidebar from '../Sidebar'

import {getHomeLink} from '../../helpers/pagesActions'
import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Main application wrapper component.
 * All pages render starts here
 */

const App = (data) => {
  const {children, location, sheet} = data
  const {classes} = sheet
  const homeLink = getHomeLink()

  // Set in what direction content must move when page changes
  const transitionStyles = location.action === 'POP' ? presets.slideRight : presets.slideLeft

  // Check if is homepage - and pass params to child components
  if (typeof data.location.state === 'undefined') data.location.state = {}
  if (data.location.pathname === homeLink) {
    data.location.state = {}
    data.location.state.isHomepage = true
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
            isHomepage: data.location.state.isHomepage ? data.location.state.isHomepage : false
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

export default jssPreset(styles)(App)
