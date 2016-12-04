/**
 * JSS preset module.
 * Used to simplify development. Exports pure JSS instance and react-jss instance (by default)
 */

import {create as createJss} from 'jss'
import {create as createInjectSheet} from 'react-jss'

import vendorPrefixer from 'jss-vendor-prefixer'
import camelCase from 'jss-camel-case'
import defaultUnit from 'jss-default-unit'
import extend from 'jss-extend'
import expand from 'jss-expand'
import nested from 'jss-nested'
import compose from 'jss-compose'

const extendOptions = {}
const nestedOptions = {}
const camelCaseOptions = {}
const defaultUnitOptions = {
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
const vendorPrefixedOptions = {}
const expandOptions = {}
const composeOptions = {}

const jssSheet = createJss()
jssSheet.use(compose(composeOptions))
jssSheet.use(extend(extendOptions))
jssSheet.use(nested(nestedOptions))
jssSheet.use(camelCase(camelCaseOptions))
jssSheet.use(defaultUnit(defaultUnitOptions))
jssSheet.use(vendorPrefixer(vendorPrefixedOptions))
jssSheet.use(expand(expandOptions))

const injectSheet = createInjectSheet(jssSheet)

/**
 * Default export - for client application where react is connected.
 */
export default injectSheet

/**
 * This export serves for ONLY ssr rendering.
 * In our case is used only 1 time - when rendering base styles
 */
export {jssSheet}
