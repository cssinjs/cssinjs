import {create as createJss} from 'jss'
import preset from 'jss-preset-default'
import isolate from 'jss-isolate'

import theme from '../theme'

export const jss = createJss(preset()).use(isolate({
  reset: {
    boxSizing: 'border-box',
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    fontWeight: 400,
    lineHeight: theme.lineHeight,
    color: theme.textColor
  }
}))
