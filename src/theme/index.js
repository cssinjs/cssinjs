import {darken} from 'polished'

import {transitionDuration} from '../constants/animations'

const base = {
  dark: '#24292e',
  light: '#eee',
}

export default {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: 16,
  lineHeight: 1.5,

  themeColor: '#f7df1e', // Main theme color

  pageBackground: '#fff',

  titleColor: base.dark,
  titleColorDark: '#000',
  textColor: base.dark,
  textColorInverse: base.light,
  textColorInverseActive: '#fff',

  borderColor: darken(0.1, base.light),
  cardColor: '#fff',

  sidebarBg: base.dark,
  sidebarBgActive: darken(0.04, base.dark),
  sidebarColor: base.light,

  // Size variables
  contentWidth: 1000,

  // Something like SASS functions
  border: (borderColor = darken(0.06, base.light)) => ({
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
