import vars from '../../styles/vars'

export default {
  container: {
    height: '100%',
  },
  content: {
    minHeight: '100%',
    maxWidth: 100,
    margin: [0, 'auto'],
    padding: 5,
    borderLeft: vars.border(vars.backgroundLine),
    borderRight: vars.border(vars.backgroundLine),

    // Static content
    '& h1': {
      fontSize: 4.2,
      color: vars.textColor,
      backgroundColor: vars.themeColor,
      padding: [2, 3],
      margin: [4, 0, 4, -8],
      lineHeight: 5,
      display: 'inline-block',
      borderLeft: {
        width: 0.5,
        style: 'solid',
        color: vars.textColor
      },
      // If element is first - remove top margin
      '&:first-child': {
        marginTop: 0,
      },
    },
    '& h1 + h2': {
      paddingTop: 0,
      marginTop: 0,
      '&:after': {
        display: 'none',
      },
    },
    '& h2, & h3': {
      margin: [4, 0],
      paddingTop: 4,
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        background: vars.backgroundLine,
        height: '1px',
        display: 'block',
        boxShadow: [['50vh', 0, 0, 0, vars.backgroundLine], ['-50vh', 0, 0, 0, vars.backgroundLine]], // Make them go outside
      }
    },
    '& h2': {
      fontSize: 3.2,
    },
    '& h3': {
      fontSize: 2.8,
    },
    '& h4': {
      fontSize: 2.4,
      margin: [3, 0],
    },
  },
  hidden: {
    display: 'none',
  },

  // Change layout and spacings on smaller screens
  '@media (max-width: 1320px)': {
    content: {
      border: 'none',
      '& h1, & h2': {
        marginLeft: -5
      }
    }
  },
  '@media (max-width: 620px)': {
    content: {
      padding: [3, 2],
      '& h1, & h2': {
        marginLeft: -2,
        fontSize: 3.2,
        lineHeight: 4.2,
      },
      '& h3, & h4': {
        margin: [2, 0],
        paddingTop: 2,
      }
    }
  }
}
