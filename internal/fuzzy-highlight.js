import * as fzy from "fzy.js"

// Print out our results with matched positions
//
//
/**
 * @param {string} query
 * @param {string} s - The string to search for the query
 * @param {(matchedString: string) => import("lit").TemplateResult | string} matchRender
 */
export function renderHighlight(query, s, matchRender = (str) => str) {
  if (!fzy.hasMatch(query, s)) return `${s}`

  const stringAry = s.split("")
  const positions = fzy.positions(query, s);

  return renderPositionHighlights(positions, stringAry, null, matchRender)
}

/**
 * @param {number[]} positions
 * @param {string[]} stringAry
 * @param {null | string} prevLetters
 * @param {(str: string) => import("lit").TemplateResult | string} matchRender
 */
function renderPositionHighlights(positions, stringAry, prevLetters, matchRender = (str) => str) {
  const start = prevLetters || stringAry.slice(0, positions[0])

  let positionIndex = 0
  let finalIndex = positionIndex

  let matchedWord = stringAry[positions[positionIndex]]

  let previousPosition = positions[positionIndex]

  while (true) {
    previousPosition = positions[positionIndex]
    positionIndex++
    const nextPosition = positions[positionIndex]

    finalIndex = nextPosition

    if (nextPosition !== previousPosition + 1) {
      break
    }

    if (stringAry[nextPosition] == undefined) {
      break
    }

    matchedWord += stringAry[nextPosition]
  }

  const nextPositions = positions.slice(positionIndex)

  if (nextPositions.length === 0) {
    const endStr = stringAry.slice(positions[positionIndex - 1] + 1).join("")
    // All done. So we just render to end of string.
    return `${start}${matchRender(matchedWord)}${endStr}`
  }

  prevLetters = stringAry.slice(previousPosition + 1, finalIndex).join("")

  return `${start}${matchRender(matchedWord)}${renderPositionHighlights(nextPositions, stringAry, prevLetters, matchRender)}`
}
