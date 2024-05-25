import * as fzy from "fzy.js"
import { escapeStringRegexp } from "./escape-string-regexp.js"


// Print out our results with matched positions
//
//
/**
 * @param {string} query
 * @param {string} s - The string to search for the query
 * @param {string | Parameters<String["replaceAll"]>[1]} matchRender
 */
export function renderRegexHighlight(query, s, matchRender) {
  if (!query.trim()) return s

  const queryRegexp = escapeStringRegexp(query)

  if (typeof matchRender === "function") {
    return s.replaceAll(queryRegexp, matchRender)
  }

  return s.replaceAll(queryRegexp, matchRender)
}

// Print out our results with matched positions
//
//
/**
 * @param {string} query
 * @param {string} s - The string to search for the query
 * @param {(str: string) => string} matchRender
 */
export function renderFuzzyHighlight(query, s, matchRender = (str) => str) {
  if (!s) return ""
  if (!query) return s
  const splitBySpaces = query.split(/\s+/)
  const hasMatch = splitBySpaces.some((word) => fzy.hasMatch(word, s))

  if (!hasMatch) return s

  const stringAry = s.split("")

  /**
   * @type {number[]}
   */
  let positions = []

  ;[query, ...splitBySpaces].forEach((word) => {
    if (!fzy.hasMatch(word, s)) return

    positions = positions.concat(fzy.positions(word, s))
  })

  positions = [...new Set(positions)].sort((a, b) => a - b)

  /**
   * @type {string[]}
   */
  const finalStrArray = []

  for (let i = 0; i < stringAry.length; i++) {
    if (!positions.includes(i)) {
      finalStrArray.push(stringAry[i])
      continue
    }

    // Handle the case for ranges.

    let endPos = findEndPosition(i, positions)

    if (endPos == null) continue

    let finalWord = ""

    finalWord = matchRender(stringAry.slice(i, endPos + 1).join(""))

    finalStrArray.push(finalWord)
    i = endPos
  }

  return finalStrArray.join("")
}

/**
 * @param {number} startPosition - The starting position in the stringAry, needs to be converted to a positionIndex
 * @param {number[]} positions
 */
function findEndPosition (startPosition, positions) {
  let startIndex = positions.findIndex((num) => num === startPosition)

  let endPosition = null

  if (startIndex === -1) return null

  for (let i = startIndex; i < positions.length; i++) {
    endPosition = positions[i]

    for (let j = i + 1; j < positions.length; j++) {
      let nextPosition = positions[j]

      if (nextPosition == null) return endPosition

      if (nextPosition !== endPosition + 1) {
        return endPosition
      }

      endPosition = positions[j]
    }
  }

  return endPosition
}
