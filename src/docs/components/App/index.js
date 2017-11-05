import React from 'react'
import {RouteTransition, presets} from 'react-router-transition'

import injectSheet, {jss, ThemeProvider, JssProvider} from 'common/utils/jss'
import GlobalStyles from 'common/components/GlobalStyles'

import {isAfter} from '../../utils/navigation'
import Sidebar from '../Sidebar'
import styles from './styles'
import theme from 'common/theme'

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
    <JssProvider jss={jss}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </JssProvider>
  )
}

App.propTypes = {
  location: React.PropTypes.object.isRequired,
  sheet: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired
}

export default injectSheet(styles)(App)
