import {create as createJss} from 'jss'
import injectSheet, {
  JssProvider,
  SheetsRegistry,
  ThemeProvider,
} from 'react-jss'
import preset from 'jss-preset-default'
import isolate from 'jss-isolate'

import theme from '../theme'

const jss = createJss(preset()).use(isolate({
  reset: {
    'box-sizing': 'border-box',
    'font-family': theme.fontFamily,
    'font-size': theme.fontSize,
    'font-weight': 400,
    'line-height': theme.lineHeight,
    color: theme.textColor
  }
}))

export {
  JssProvider,
  SheetsRegistry,
  ThemeProvider,
  jss
}

export default injectSheet