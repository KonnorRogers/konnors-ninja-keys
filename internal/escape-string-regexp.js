/**
 * Turns a string into regexp with proper escape sequences.
 * @param {string} str
 * @returns {RegExp}
 */
export function escapeStringRegexp (str) {
  // https://github.com/sindresorhus/escape-string-regexp/blob/main/index.js
  return new RegExp(
    str
      .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
      .replace(/-/g, '\\x2d'),
    'gi'
  )
}
