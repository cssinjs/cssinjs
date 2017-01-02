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
      color: vars.color,
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

    // Link styles
    a: {
      fontWeight: 500,
      textDecoration: 'underline',
      color: vars.textColor,
      '&:hover': {
        textDecoration: 'none',
      },
    },

    // Paragraphs
    p: {
      margin: [2, 0],
      '&:first-child': {
        marginTop: 0
      },
    },

    // Headings
    'h1, h2, h3, h4': {
      margin: [4, 0],
      fontWeight: 400,
      position: 'relative',
      '&:first-child': {
        marginTop: 0
      },
    },
    h1: {
      fontSize: 3.6,
    },
    h2: {
      fontSize: 2.4,
      margin: [3, 0],
    },
    h3: {
      fontSize: 2,
      margin: [2, 0],
    },
    h4: {
      fontSize: 1.8,
      margin: [2, 0],
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
      padding: [0.3, 0]
    },

    // Divider
    hr: {
      margin: [2, 0],
      border: 'none',
      background: vars.borderColor,
      height: '1px',
      display: 'block',
    },

    // Tables
    table: {
      borderCollapse: 'collapse',
      marginBottom: 2,
    },
    'th, td': {
      padding: [0.5, 1.5],
      borderBottom: vars.border(vars.borderColor),
      borderLeft: vars.border(vars.borderColor),
      ':first-child': {
        borderLeft: 'none',
      },
    },
    th: {
      fontWeight: 'bold',
      background: vars.cardColor,
    },

    // Svg tag
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    }
  }
}
