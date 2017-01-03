import color from 'color'
import {translate} from 'css-functions'

import theme from '../theme'

const backgroundLineColor = color(theme.cardColor).alpha(0.4).string()

export default {
  notFound: {
    width: '100%',
    height: '100%',
    minHeight: 40,
    position: 'relative',
    overflow: 'hidden',
    color: theme.titleColor,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    maxWidth: 100,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    lineHeight: 'normal',
    position: 'relative',
    zIndex: 5,
  },
  text: {
    fontSize: 3.6,
    lineHeight: 'normal',
    position: 'relative',
    zIndex: 5,
  },
  '@media (max-width: 1024px)': {
    inner: {
      margin: [0, 2],
      width: 'auto',
      borderLeft: 'none',
      borderRight: 'none',
    }
  },
}
