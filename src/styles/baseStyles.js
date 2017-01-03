import vars from './vars'

/**
 * Global stylesheet that merges together base styles and normalize
 */
export default {
  '@import': 'https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,500i',

  '@global': {
    html: {
      fontSize: '62.5%',
      height: '100%',
    },
    body: {
      background: vars.pageBackground,
      color: vars.textColor,
      height: '100%',
      fontFamily: vars.fontFamily,
      fontSize: vars.fontSize,
      fontWeight: 400,
      lineHeight: vars.lineHeight,
      overflowX: 'hidden', // Need to hide transition scroll
    },
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    }
  }
}
