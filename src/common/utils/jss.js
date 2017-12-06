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
    'font-family': theme.typography.fontFamily,
    'font-size': theme.typography.fontSize,
    'font-weight': 400,
    'line-height': theme.typography.lineHeight,
    color: theme.text.light
  }
}))

export {
  JssProvider,
  SheetsRegistry,
  ThemeProvider,
  jss
}

export default injectSheet
