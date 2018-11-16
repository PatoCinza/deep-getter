/**
 * Represents an error in some accessing operation
 * @interface
 * @prop { true } isNothing
 */
const Nothing = { isNothing: true }

/**
 * Gets the obj[key] property, returns {@see Nothing} if it doesnt exists
 * @private
 * @param { Object } obj Object to be accessed
 * @param { String } key Key to be used
 * @returns { * | Nothing } Accessed property or nothing
 */
const get = (obj, key) => (obj && obj[key] !== null && obj[key] !== undefined) ? obj[key] : Nothing

/**
 * Access deep properties on object going through the given path,
 * returns {@link Nothing} if it is not possible to fetch the value
 * @global
 * @name deepGet
 * @param { Object } obj Object to be accessed
 * @param { String } path Path to be accessed separated by .
 * @returns { * | Nothing } Final accessed property or nothing
 */
const deepGet = (obj, path) => path && path.split('.').reduce(get, obj)

/**
 * Checks if x is Nothing
 * @global
 * @name isNothing
 * @param { * } x Anything you want to test
 * @returns { Boolean } whether it's equal or not
 */
const isNothing = (x) => x === Nothing

/**
 * Access deep properties on object going through the given path
 * If it would return a {@link Nothing}, it returns `fallback` instead
 * @global
 * @name deepGetOrElse
 * @param { Object } obj Object to be accessed
 * @param { String } path Path to be accessed separated by .
 * @param { * } fallback the value to return if obj[path] is Nothing
 */
const deepGetOrElse = (obj, path, fallback) => isNothing(deepGet(obj, path)) ? fallback : deepGet(obj, path)

module.exports = { deepGet, isNothing, deepGetOrElse }
