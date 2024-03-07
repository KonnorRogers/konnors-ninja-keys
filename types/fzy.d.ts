declare module 'fzy.js' {
  function hasMatch(needle: string, haystack: string): boolean
  function positions(needle: string, haystack: string): number[]
  function score(needle: string, haystack: string): number
}

