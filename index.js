const Nothing = { isNothing: true }

/**
 * Gets the obj[key] property, returns Nothing if it doesnt exists
 * @param { Object } obj Object to be accessed
 * @param { String } key Key to be used
 * @returns { * | Nothing } Accessed property or nothing
 */
const get = (obj, key) => (obj && obj[key] !== null && obj[key] !== undefined) ? obj[key] : Nothing

module.exports = {
  /**
   * Access all properties on object going through the given path
   * @param { Object } obj Object to be accessed
   * @param { String } path Path to be accessed separated by .
   * @returns { * | Nothing } Final accessed property or nothing
   */
  getAll: (obj, path) => path && path.split('.').reduce(get, obj),

  /**
   * Checks if x is Nothing
   * @param { * } x Anything you want to test
   * @returns { Boolean } whether it's equal or not
   */
  isNothing: (x) => x === Nothing
}
