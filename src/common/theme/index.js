import darken from 'polished/lib/color/darken'
import lighten from 'polished/lib/color/lighten'

import {transitionDuration} from '../constants/animations'

const base = {
  dark: '#24292e',
  light: '#eee',
  brand: '#f7df1e'
}

export default {
  dark: base.dark,
  light: base.light,
  brand: base.brand,

  radius: 0,

  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: 16,
    lineHeight: 1.5,
  },

  common: {
    border: darken(0.1, base.light),
    page: lighten(0.2, base.light),
  },

  text: {
    // Indicates that color will be good on light background
    light: base.dark,
    lightDeep: base.dark,
    lightActive: lighten(0.1, base.dark),
    // For dark background
    dark: base.light,
    darkDeep: base.light,
    darkActive: lighten(0.2, base.light),
  },

  background: {
    light: lighten(0.2, base.light),
    lightDeep: base.light,
    dark: base.dark,
    darkDeep: darken(0.04, base.dark),
  },

  sidebar: {
    background: base.dark,
    backgroundActive: darken(0.04, base.dark),
    color: base.light,
  },

  code: {
    fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    background: '#f6f8fa',
  },

  transition: {
    duration: transitionDuration,
    timingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)',
  },

}
