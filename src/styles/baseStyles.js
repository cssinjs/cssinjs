import normalize from './normalize'
import vars from './vars'

/*
 * Global stylesheet that merges together base styles and normalize
 */
export default {
  ...normalize,

  '@import': 'https://fonts.googleapis.com/css?family=Roboto:300,300i,700,700i',

  html: {
    ...normalize.html,
    fontSize: '62.5%',
    height: '100%',
  },
  body: {
    ...normalize.body,
    background: vars.pageBackground,
    color: vars.color,
    height: '100%',
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    fontWeight: 300,
    lineHeight: vars.lineHeight,
    overflowX: 'hidden', // Need to hide transition scroll
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  // Link styles
  a: {
    fontWeight: 'bold',
    textDecortation: 'underline',
    color: vars.textColor,
    '&:hover': {
      textDecoration: 'none'
    }
  },
  // Paragraphs
  p: {
    margin: [0, 0, 2],
  },
  // Headings
  'h1, h2, h3, h4': {
    margin: [0, 0, 4],
  },
  h1: {
    fontSize: 4.2,
  },
  h2: {
    fontSize: 3.6,
  },
  h3: {
    fontSize: 2.4,
    marginBottom: 2,
  },
  h4: {
    fontSize: 2,
    marginBottom: 2,
  },
  // Lists
  'ul, ol': {
    margin: [2, 0],
    padding: [0, 0, 0, 2.5],
  },
  ul: {
    listStyle: 'circle',
  },
  li: {
    padding: [0.5, 0]
  },
  // Divider
  hr: {
    margin: [4, 0],
    border: 'none',
    background: vars.backgroundLine,
    height: '1px',
    display: 'block',
    boxShadow: [['50vh', 0, 0, 0, vars.backgroundLine], ['-50vh', 0, 0, 0, vars.backgroundLine]], // Make them go outside
  },
  // Tables
  table: {
    borderCollapse: 'collapse',
    marginBottom: 2,
  },
  'th, td': {
    padding: [1, 2],
    borderBottom: vars.border(vars.backgroundLine),
    borderLeft: vars.border(vars.backgroundLine),
  },
  th: {
    fontWeight: 'bold',
    background: vars.cardColor,
    '&:first-child': {
      borderLeft: 'none',
    }
  },
  td: {
    '&:first-child': {
      borderLeft: 'none',
    }
  },
  // Svg tag
  svg: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  // Main container styles
  '#root': {
    height: '100%',
  },
}
