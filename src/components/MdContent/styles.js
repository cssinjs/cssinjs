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
        margin: [2, 0],
        '&:first-child': {
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
    paddingRight: 2,
    marginLeft: 2,
    '&:last-child': {
      borderRight: 0,
      paddingRight: 0,
    }
  },

  // Remove inlining with title
  '@media (max-width: 1024px)': {
    actions: {
      float: 'none',
      justifyContent: 'flex-end',
      marginBottom: 2,
    }
  },

  // Remove widgets on mobile. Because there is no space for them
  '@media (max-width: 600px)': {
    actions: {
      display: 'none',
    }
  },
}
