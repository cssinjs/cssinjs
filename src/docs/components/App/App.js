import React, {PropTypes} from 'react'
import {RouteTransition, presets} from 'react-router-transition'
import injectSheet from 'common/utils/jss'
import GlobalStyles from 'common/components/GlobalStyles'
import {mediaMd, mediaSm} from 'common/constants/media'
import {isAfter} from '../../utils/navigation'
import Sidebar from '../Sidebar'

let prevLocation

const styles = theme => ({
  app: {
    background: theme.common.page,
    color: theme.text.light,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: 400,
    lineHeight: theme.typography.lineHeight,
    overflow: 'hidden'
  },
  sidebar: {
    background: theme.sidebar.background,
    color: theme.sidebar.color,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: 300,
    zIndex: 100,
  },
  content: {
    position: 'relative',
    marginLeft: 300,
    minHeight: '100vh',
  },
  contentInner: {
    '& > div': {
      left: 0,
      right: 0,
      willChange: 'transform',
    },
    '& > div:first-child': {
      position: 'absolute',
      zIndex: 10, // Element, that is going out - must be on top
    },
    '& > div:last-child': {
      position: 'static',
    },
  },
  [mediaMd]: {
    sidebar: {
      width: 260
    },
    content: {
      marginLeft: 260
    },
  },
  [mediaSm]: {
    sidebar: {
      width: '100%',
      bottom: 'auto',
      height: 70,
    },
    content: {
      marginLeft: 0,
      paddingTop: 70,
    }
  },
})

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
