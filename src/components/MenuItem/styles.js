import vars from '../../styles/vars'

export default {
  container: {

  },
  item: {
    position: 'relative',
    '&:hover $link': {
      backgroundColor: vars.sidebarBgActive,
    }
  },

  // Links
  link: {
    color: vars.sidebarColor,
    padding: [1.5, 6, 1.5, 2.5],
    textDecoration: 'none',
    fontWeight: 300,
    display: 'block',
    borderTop: vars.border(vars.sidebarBorder),
    borderBottom: vars.border(vars.sidebarShadow),
    backgroundColor: vars.sidebarBg,
    transition: vars.transition(),
  },
  linkActive: {
    composes: '$link',
    backgroundColor: vars.sidebarBgActive,
  },

  // Links without childrens
  linkNoChildren: {
    composes: '$link',
    paddingRight: 2.5
  },
  linkActiveNoChildren: {
    composes: ['$linkNoChildren', '$linkActive']
  },

  icons: {
    fill: vars.sidebarColor,
    padding: 1,
    transition: vars.transition(),
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    right: 2,
    width: 4,
    height: 4,
    transform: 'translateY(-50%)',
    border: 0,
    background: 'none',
    outline: 0,
    '&:hover': {
      opacity: 0.5,
    }
  },

  icon: {
    display: 'inline-block',
    width: 2,
    verticalAlign: 'middle',
    willChange: 'transform',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& svg': {
      display: 'block'
    }
  },
  iconArrow: {
    composes: '$icon',
    transition: vars.transition('500ms'),
  },
  iconArrowHidden: {
    composes: '$iconArrow',
    opacity: 0,
    transform: 'translate(-150%, -50%)',
  },
  iconClose: {
    composes: '$icon',
    transition: vars.transition('500ms'),
  },
  iconCloseHidden: {
    composes: '$iconClose',
    opacity: 0,
    transform: 'translate(150%, -50%)',
  },

  childWrap: {
    height: 0,
    opacity: 0,
    willChange: 'transform',
    visibility: 'hidden',
    overflow: 'hidden',
    transition: vars.transition(),
    transform: 'translate(-50%, 0)',
  },
  childWrapActive: {
    composes: '$childWrap',
    height: 'auto',
    opacity: 1,
    visibility: 'visible',
    transform: 'translate(0, 0)',
  },

  children: {
    '& $link, & $linkActive': {
      padding: [0.7, 6, 0.7, 5],
      backgroundColor: vars.sidebarBgActive
    },
    '& $linkActive, & $link:hover': {
      backgroundColor: vars.sidebarBg
    },
    // Second nesting level (avoid to use this and DON'T try to make 3 level nesting)
    '& $children $link, & $children $linkActive': {
      backgroundColor: vars.sidebarBg
    },
    '& $children $linkActive, & $children $link:hover': {
      backgroundColor: vars.sidebarBgActive
    }
  }
}
