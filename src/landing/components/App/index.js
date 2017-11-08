import React from 'react'
import injectSheet from 'common/utils/jss'
import GlobalStyles from 'common/components/GlobalStyles'
import Section from '../Section'
import Home from '../Home'

const styles = {
  app: {
    position: 'relative'
  }
}

const App = (props) => {
  const {classes} = props

  return (
    <GlobalStyles>
      <div className={classes.app}>
        <Section showHeader={false}>
          <Home />
        </Section>
        <Section colorScheme={'dark'}>
          {'> Used by'}
        </Section>
        <Section colorScheme={'light'}>
          {'> Abstractions'}
        </Section>
        <Section colorScheme={'lightDeep'}>
          {'> SSR'}
        </Section>
        <Section colorScheme={'dark'}>
          {'> Theming'}
        </Section>
        <Section colorScheme={'darkDeep'}>
          {'> Animations'}
        </Section>
      </div>
    </GlobalStyles>
  )
}

App.propTypes = {
  classes: React.PropTypes.object.isRequired
}

export default injectSheet(styles)(App)
