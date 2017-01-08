import theme from '../../theme'

export default {
  highlightedMarkdown: {
    '@global': {
      'b, strong': {
        fontWeight: 500
      },

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
        margin: [20, 0],
        '&:first-child': {
          isolate: false,
          marginTop: 0
        },
      },

      // Headings
      'h1, h2, h3, h4': {
        color: theme.titleColor,
        margin: [40, 0],
        fontWeight: 400,
        lineHeight: 1,
        '&:first-child': {
          isolate: false,
          marginTop: 0
        },
      },
      h1: {
        fontSize: 36,
      },
      h2: {
        fontSize: 24,
        margin: [30, 0],
      },
      h3: {
        fontSize: 20,
        margin: [20, 0],
      },
      h4: {
        fontSize: 18,
        margin: [20, 0],
      },

      // Lists
      'ul, ol': {
        margin: [20, 0],
        padding: [0, 0, 0, 25]
      },
      'ul > li': {
        listStyle: 'circle',
      },
      'ol > li': {
        listStyle: 'decimal'
      },
      li: {
        padding: [3, 0],
        '& p': {
          margin: 0
        }
      },

      // Divider
      hr: {
        margin: [20, 0],
        border: 'none',
        background: theme.borderColor,
        height: 1,
        display: 'block',
      },

      // Tables
      table: {
        borderCollapse: 'collapse',
        marginBottom: 20,
      },
      'th, td': {
        padding: [5, 15],
        borderBottom: theme.border(theme.borderColor),
        borderLeft: theme.border(theme.borderColor),
        '&:first-child': {
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
    margin: {
      right: 5,
      top: '0.5em'
    },
    opacity: 0
  }
}
