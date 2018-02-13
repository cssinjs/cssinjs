import React from 'react'
import {JssProvider} from 'react-jss'
import {jss} from '../utils/jss'
import App from '../components/App'

export default ({registry, ...props}) => (
  <JssProvider jss={jss} registry={registry}>
    <App {...props} />
  </JssProvider>
)
