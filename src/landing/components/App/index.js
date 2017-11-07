import React from 'react'
import injectSheet from 'common/utils/jss'
import GlobalStyles from 'common/components/GlobalStyles'
import Section from '../Section'

const styles = theme => ({
  app: {
    position: 'relative'
  }
})

const App = (props) => {
  const {children, classes} = props

  return (
    <GlobalStyles>
      <div className={classes.app}>
        <Section showHeader={false}>
          {'> Home section'}
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
