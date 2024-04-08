//allowed character from user "a-z" "A-Z" " "

export function countWords(input: string): number {
  let inWord = false
  let wordCounter = 0

  for (const character of input) {
    const currentCharacterIsLetter = /[a-zA-z]/.test(character)

    if (currentCharacterIsLetter && inWord === false) {
      ++wordCounter
      inWord = true
    }

    if (!currentCharacterIsLetter) inWord = false
  }

  return wordCounter
}

export function countWordsWithRegex(input: string): number {
  const regex = /[a-zA-Z]+/g

  const words = input.match(regex)

  return words?.length ?? 0
}
