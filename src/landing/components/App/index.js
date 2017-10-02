import React from 'react'
import injectSheet from 'common/utils/jss'
import GlobalStyles from 'common/components/GlobalStyles'

const styles = {
  app: {
    position: 'relative'
  }
}

const App = (props) => {
  const {children, sheet: {classes}} = props

  return (
    <GlobalStyles>
      <div className={classes.app}>
        TEST
        {children}
      </div>
    </GlobalStyles>
  )
}

App.propTypes = {
  sheet: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired
}

export default injectSheet(styles)(App)
