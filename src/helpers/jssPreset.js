/**
 * JSS preset helper
 * Used to simplify development. Exports pure JSS instance and react-jss instance (by default)
 */

import {create as createJss} from 'jss'
import {create as createInjectSheet} from 'react-jss'
import preset from 'jss-preset-default'

const defaultUnit = {
  border: 'rem',
  'border-width': 'rem',
  'border-left-width': 'rem',
  'border-right-width': 'rem',
  'border-top-width': 'rem',
  'border-bottom-width': 'rem',
  bottom: 'rem',
  top: 'rem',
  right: 'rem',
  left: 'rem',
  height: 'rem',
  'min-height': 'rem',
  'max-height': 'rem',
  width: 'rem',
  'min-width': 'rem',
  'max-width': 'rem',
  margin: 'rem',
  'margin-top': 'rem',
  'margin-left': 'rem',
  'margin-right': 'rem',
  'margin-bottom': 'rem',
  padding: 'rem',
  'padding-top': 'rem',
  'padding-left': 'rem',
  'padding-right': 'rem',
  'padding-bottom': 'rem',
  'font-size': 'rem',
  'line-height': 'rem'
}

const jssSheet = createJss(preset({defaultUnit}))

/**
 * Default export - for client application where react is connected.
 */
export default createInjectSheet(jssSheet)

/**
 * This export serves for ONLY ssr rendering.
 * In our case is used only 1 time - when rendering base styles
 */
export {jssSheet}
