import darken from 'polished/lib/color/darken'

import {transitionDuration} from '../constants/animations'

const base = {
  dark: '#24292e',
  light: '#eee',
}

/**
 * TODO:
 * 1. Systemaze things
 *    - Make nested object e.g. text, brand, common etc.
 * 2. Remove unneded colors because they copy another variables
 * 3. Move border and transition functions to utils
 * 4. Move breakpoints to constants, because this is NOT a THEME
 */

export default {
  dark: base.dark,
  light: base.light,

  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: 16,
  lineHeight: 1.5,

  color: '#f7df1e', // Main theme color

  radius: 0,

  backgroundLight: '#fff',
  backgroundLightDeep: base.light,
  backgroundDark: base.dark,
  backgroundDarkDeep: darken(0.04, base.dark),

  textColorLight: base.dark,
  textColorLightDeep: base.dark,
  textColorDark: base.light,
  textColorDarkDeep: base.light,

  pageBackground: '#fff',

  titleColor: base.dark,
  titleColorDark: '#000',
  textColor: base.dark,
  textColorInverse: base.light,
  textColorInverseActive: '#fff',

  transitionDuration: 300,
  transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)',

  borderColor: darken(0.1, base.light),
  cardColor: '#fff',

  sidebarBg: base.dark,
  sidebarBgActive: darken(0.04, base.dark),
  sidebarColor: base.light,

  codeFontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  codeBackground: '#f6f8fa',

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
