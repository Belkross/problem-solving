import { countWords, countWordsWithRegex } from "./count-number-of-words-in-string.ts"

const cases: Array<{ input: string; expectedOutput: number }> = [
  { input: "  Bonjour    je suis beau  ", expectedOutput: 4 },
  { input: " ", expectedOutput: 0 },
  { input: "", expectedOutput: 0 },
]

test.each(cases)("%o", ({ input, expectedOutput }) => {
  expect(countWords(input)).toBe(expectedOutput)
})

test.each(cases)("%o", ({ input, expectedOutput }) => {
  expect(countWordsWithRegex(input)).toBe(expectedOutput)
})
