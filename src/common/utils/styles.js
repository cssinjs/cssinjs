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
      background: theme.background[scheme],
      color: theme.text[scheme]
    }
  })
  return result
}

/**
 * @param {string} scheme
 * @returns {boolean}
 */
export const isInverseScheme = (scheme) => {
  if (!scheme) return false
  return scheme.indexOf('dark') !== -1
}

/**
 * @param {string} duration
 * @param {string} delay
 * @returns {Object}
 */
export const transition = (duration = `${theme.transition.duration}ms`, delay = '0ms') => ({
  property: 'all',
  timingFunction: theme.transition.timingFunction,
  duration,
  delay,
})

export default {
  getColorSchemes,
  isInverseScheme,
  transition
}
