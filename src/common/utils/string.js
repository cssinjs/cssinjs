/**
 * Capitalize first letter
 * @param {string} text
 * @returns {string}
 */
export const ucfirst = text => {
  const char = text.charAt(0).toUpperCase()
  return char + text.substr(1, text.length - 1)
}

/**
 * Convert number to string separated by comma
 * e.g. 100000 => 100,000
 * @param {number} num
 * @returns {string}
 */
export const numberWithCommas = num => String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export default {
  ucfirst,
  numberWithCommas
}