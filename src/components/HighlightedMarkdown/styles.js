import theme from '../../theme'

export default {
  highlightedMarkdown: {
    '@global': {
      // Link styles
      a: {
        textDecoration: 'underline',
        color: theme.textColor,
        '&:hover': {
          isolate: false,
          textDecoration: 'none',
        },
      },

      // Paragraphs
      p: {
        margin: [2, 0],
        '&:first-child': {
          isolate: false,
          marginTop: 0
        },
      },

      // Headings
      'h1, h2, h3, h4': {
        color: theme.titleColor,
        margin: [4, 0],
        fontWeight: 400,
        lineHeight: '1',
        '&:first-child': {
          isolate: false,
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
      'ul li': {
        listStyle: 'circle',
      },
      'ol li': {
        listStyle: 'decimal'
      },
      li: {
        padding: [0.3, 0]
      },

      // Divider
      hr: {
        margin: [2, 0],
        border: 'none',
        background: theme.borderColor,
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
        borderBottom: theme.border(theme.borderColor),
        borderLeft: theme.border(theme.borderColor),
        ':first-child': {
          isolate: false,
          borderLeft: 'none'
        },
      },
      th: {
        fontWeight: 'bold',
        background: theme.cardColor,
      }
    }
  },
  heading: {
    position: 'relative',
    '&:hover $headingAnchor': {
      isolate: false,
      opacity: 1
    }
  },
  headingAnchor: {
    transition: theme.transition(),
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 15,
    right: '100%',
    marginRight: 5,
    opacity: 0,
  }
}
