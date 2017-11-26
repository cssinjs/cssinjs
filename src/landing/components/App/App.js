import React from 'react'
import GlobalStyles from 'common/components/GlobalStyles'
import Section from '../Section'
import Home from '../Home'
import UsedBy from '../UsedBy'
import Abstractions from '../Abstractions'
import Demo from '../Demo'
import Footer from '../Footer'

import companies from '../../companies'
import {ssr, theming, animations} from '../../demos'

const App = () => (
  <GlobalStyles>
    <div>
      <Section showHeader={false} spaced={false}>
        <Home />
      </Section>
      <Section colorScheme={'dark'}>
        <UsedBy companies={companies} />
      </Section>
      <Section colorScheme={'light'}>
        <Abstractions />
      </Section>
      <Section colorScheme={'lightDeep'}>
        <Demo {...ssr} />
      </Section>
      <Section colorScheme={'dark'}>
        <Demo {...theming} />
      </Section>
      <Section colorScheme={'darkDeep'}>
        <Demo {...animations} />
      </Section>
      <Footer />
    </div>
  </GlobalStyles>
)

export default App
