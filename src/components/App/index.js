import React from 'react'
import {RouteTransition, presets} from 'react-router-transition'

import injectSheet from '../../utils/jss'
import {isAfter} from '../../utils/navigation'
import GlobalStyles from '../GlobalStyles'
import Sidebar from '../Sidebar'
import styles from './styles'

let lastLocation

/**
 * Returns a transition based on the order in the tree.
 * There is no transition if its the first page.
 */
const getTransition = (location) => {
  let transition

  if (lastLocation) {
    if (isAfter(lastLocation.pathname, location.pathname)) transition = presets.slideLeft
    else transition = presets.slideRight
  }

  lastLocation = location

  return transition
}

const App = (props) => {
  const {children, location, sheet: {classes}} = props
  const transition = getTransition(location)

  return (
    <GlobalStyles>
      <div className={classes.app}>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
        <div className={classes.content}>
          {transition ? (
            <RouteTransition
              className={classes.contentInner}
              pathname={location.pathname}
              {...transition}
            >
              {children}
            </RouteTransition>
          ) : children}
        </div>
      </div>
    </GlobalStyles>
  )
}

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
  sheet: React.PropTypes.object
}

export default injectSheet(styles)(App)
