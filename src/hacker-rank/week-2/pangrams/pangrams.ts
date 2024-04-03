function pangrams(string: string): string {
	const letterFrequencies: number[] = new Array(26).fill(0)
	const characters = Array.from(string)
	let isPangram = false

	for (const character of characters) {
		const characterCode = character.charCodeAt(0)
		const isSpace = characterCode === " ".charCodeAt(0)
		const isLowerCase = characterCode >= "a".charCodeAt(0) && characterCode <= "z".charCodeAt(0)
		const isUpperCase = characterCode >= "A".charCodeAt(0) && characterCode <= "Z".charCodeAt(0)

		if (isSpace) continue
		else if (isLowerCase) ++letterFrequencies[characterCode - "a".charCodeAt(0)]
		else if (isUpperCase) ++letterFrequencies[characterCode - "A".charCodeAt(0)]

		if (letterFrequencies.includes(0) === false) {
			isPangram = true
			break
		}
	}

	return isPangram ? "pangram" : "not pangram"
}
