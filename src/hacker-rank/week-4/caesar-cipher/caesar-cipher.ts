function getCharCode(char: string): number {
	if (char) return char.codePointAt(0) as number
	else return NaN
}

const alphabetLength = 26
const minMinusculeCode = getCharCode("a")
const maxMinusculeCode = getCharCode("z")
const minCapitalCode = getCharCode("A")
const maxCapitalCode = getCharCode("Z")

function caesarCipher(message: string, k: number): string {
	const rotation = k % alphabetLength

	const charCodes = Array.from(message, (character) => getCharCode(character))
	const rotatedCharCodes = charCodes.map((code) => {
		const isMinuscule = code >= minMinusculeCode && code <= maxMinusculeCode
		const isCapital = code >= minCapitalCode && code <= maxCapitalCode

		if (isMinuscule) {
			if (code + rotation <= maxMinusculeCode) return code + rotation
			else return minMinusculeCode - 1 + rotation - (maxMinusculeCode - code)
		} else if (isCapital) {
			if (code + rotation <= maxCapitalCode) return code + rotation
			else return minCapitalCode - 1 + rotation - (maxCapitalCode - code)
		} else {
			return code
		}
	})

	return String.fromCodePoint(...rotatedCharCodes)
}
