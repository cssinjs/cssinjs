import React from 'react'
import {RouteTransition, presets} from 'react-router-transition'
import injectSheet, {JssProvider} from 'react-jss'

import {isAfter} from '../../utils/navigation'
import GlobalStyles from '../GlobalStyles'
import Sidebar from '../Sidebar'
import styles from './styles'

let prevLocation

/**
 * Returns a transition based on the order in the tree.
 * There is no transition if its the first page.
 */
const getTransition = (location) => {
  let transition = presets.slideRight

  if (prevLocation && isAfter(prevLocation.pathname, location.pathname)) {
    transition = presets.slideLeft
  }

  prevLocation = location

  return transition
}

const App = (props) => {
  const {children, location, classes} = props
  const transition = getTransition(location)

  return (
    <GlobalStyles>
      <div className={classes.app}>
        <Sidebar className={classes.sidebar} />
        <div className={classes.content}>
          <RouteTransition
            className={classes.contentInner}
            pathname={location.pathname}
            runOnMount={false}
            {...transition}
          >
            {children}
          </RouteTransition>
        </div>
      </div>
    </GlobalStyles>
  )
}

App.propTypes = {
  location: React.PropTypes.object.isRequired,
  classes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired
}

export default injectSheet(styles)(App)
