import React, {PropTypes} from 'react'
import {RouteTransition, presets} from 'react-router-transition'
import injectSheet from 'common/utils/jss'
import GlobalStyles from 'common/components/GlobalStyles'
import styles from './styles'
import {isAfter} from '../../utils/navigation'
import Sidebar from '../Sidebar'

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

const App = ({children, location, classes}) => {
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
  location: PropTypes.object.isRequired, // eslint-disable-line
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired
}

export default injectSheet(styles)(App)
