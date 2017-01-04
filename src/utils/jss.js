import {create as createJss} from 'jss'
import {
  create as createInjectSheet,
  SheetsRegistryProvider,
  SheetsRegistry
} from 'react-jss'
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

export const jss = createJss(preset({defaultUnit}))

export {
  SheetsRegistryProvider,
  SheetsRegistry
}

export default createInjectSheet(jss)
