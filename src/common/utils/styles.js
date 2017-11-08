import {ucfirst} from 'common/utils/string'
import schemes from 'common/constants/colorScheme'
import theme from 'common/theme'

/**
 * Retrive all classes based on global color scheme
 * @retuns {Object} jss classes for all schemes
 */
export const getColorSchemes = () => {
  const result = {}
  schemes.forEach((scheme) => {
    result[scheme] = {
      background: theme[`background${ucfirst(scheme)}`],
      color: theme[`textColor${ucfirst(scheme)}`]
    }
  })
  return result
}

/**
 * @param {string} scheme
 * @returns {boolean}
 */
export const isInverseScheme = scheme => scheme.indexOf('dark') !== -1

export default {
  getColorSchemes,
  isInverseScheme
}
