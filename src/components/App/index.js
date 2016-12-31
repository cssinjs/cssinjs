import React from 'react'
import {RouteTransition, presets} from 'react-router-transition'

import Sidebar from '../Sidebar'
import injectSheet from '../../utils/jss'
import styles from './styles'

let initial = true

/**
 * Main application wrapper component.
 * All pages render starts here
 */
const App = (props) => {
  const {children, location, sheet: {classes}} = props
  let transition

  if (initial) initial = false
  else transition = location.action === 'POP' ? presets.slideRight : presets.slideLeft

  return (
    <div className={classes.app}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.content}>
        {transition && (
          <RouteTransition
            className={classes.contentInner}
            pathname={location.pathname}
            {...transition}
          >
            {children}
          </RouteTransition>
        )}
        {!transition && children}
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
