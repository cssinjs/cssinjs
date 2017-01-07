import color from 'color'

import {transitionDuration} from '../constants/animations'

const base = {
  dark: '#333',
  light: '#eee',
}

export default {
  fontFamily: '"Fira Sans", Helvetica, Arial, sans-serif',
  fontSize: 15,
  lineHeight: 1.65,

  themeColor: '#f7df1e', // Main theme color

  pageBackground: '#f9f9f9',

  titleColor: base.dark,
  titleColorDark: '#000',
  textColor: color(base.dark).lighten(0.6).hex(),
  textColorInverse: base.light,
  textColorInverseActive: '#fff',

  borderColor: color(base.light).darken(0.1).hex(),
  cardColor: '#fff',

  sidebarBg: base.dark,
  sidebarBgActive: color(base.dark).darken(0.2).hex(),
  sidebarColor: base.light,
  sidebarBorder: color(base.light).alpha(0.15).string(),
  sidebarShadow: color(base.dark).darken(0.4).hex(),

  // Size variables
  contentWidth: 1000,

  // Something like SASS functions
  border: (borderColor = color(base.light).darken(0.06).hex()) => ({
    width: '1px', // jss-default-unit and jss-expand bug. Deep passing interprets 'width' as not a part of 'border' statement
    style: 'solid',
    color: borderColor,
  }),
  transition: (duration = `${transitionDuration}ms`, delay = '0ms') => ({
    property: 'all',
    timingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)',
    duration,
    delay,
  }),

  // Breakpoints
  media: {
    lg: '@media (max-width: 1200px)',
    md: '@media (max-width: 992px)',
    sm: '@media (max-width: 768px)',
    xs: '@media (max-width: 480px)'
  }
}
