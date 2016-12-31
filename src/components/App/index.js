import React from 'react'
import {RouteTransition, presets} from 'react-router-transition'

import Sidebar from '../Sidebar'
import injectSheet from '../../utils/jss'
import styles from './styles'

/**
 * Main application wrapper component.
 * All pages render starts here
 */
const App = (data) => {
  const {children, location, sheet} = data
  const {classes} = sheet

  // Set in what direction content must move when page changes
  const transitionStyles = location.action === 'POP' ? presets.slideRight : presets.slideLeft

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
          {children}
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
