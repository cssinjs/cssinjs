import theme from '../theme'

export default {
  mdContent: {},
  content: {
    position: 'relative',
  },
  markdown: {
    display: 'block',
    '@global': {
      // Link styles
      a: {
        fontWeight: 500,
        textDecoration: 'underline',
        color: theme.textColor,
        '&:hover': {
          textDecoration: 'none',
        },
      },

      // Paragraphs
      p: {
        margin: [20, 0],
        '&:first-child': {
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
        padding: [0, 0, 0, 25],
      },
      ul: {
        listStyle: 'circle',
      },
      li: {
        padding: [3, 0]
      },

      // Divider
      hr: {
        margin: [20, 0],
        border: 'none',
        background: theme.borderColor,
        height: '1px',
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
        ':first-child': {
          borderLeft: 'none',
        },
      },
      th: {
        fontWeight: 'bold',
        background: theme.cardColor,
      }
    }
  },
  actions: {
    float: 'right',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 5,
  },
  action: {
    borderRight: [1, 'solid', theme.borderColor],
    paddingRight: 20,
    marginLeft: 20,
    '&:last-child': {
      borderRight: 0,
      paddingRight: 0,
    }
  },

  // Remove inlining with title
  [theme.media.md]: {
    actions: {
      float: 'none',
      justifyContent: 'flex-end',
      marginBottom: 20,
    }
  },

  // Remove widgets on mobile. Because there is no space for them
  [theme.media.sm]: {
    actions: {
      display: 'none',
    }
  },
}
