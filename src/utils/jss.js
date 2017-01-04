import {create as createJss} from 'jss'
import {
  create as createInjectSheet,
  SheetsRegistryProvider,
  SheetsRegistry
} from 'react-jss'
import preset from 'jss-preset-default'

export const jss = createJss(preset())

export {
  SheetsRegistryProvider,
  SheetsRegistry
}

export default createInjectSheet(jss)
