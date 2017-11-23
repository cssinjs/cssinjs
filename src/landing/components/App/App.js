import React from 'react'
import GlobalStyles from 'common/components/GlobalStyles'
import Section from '../Section'
import Home from '../Home'
import UsedBy from '../UsedBy'

const App = () => (
  <GlobalStyles>
    <div>
      <Section showHeader={false} spaced={false}>
        <Home />
      </Section>
      <Section colorScheme={'dark'}>
        <UsedBy />
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

export default App
