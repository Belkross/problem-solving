function anagram(input: string): number {
	if (input.length % 2 !== 0) return -1

	let commonChar = 0

	const leftPart = Array.from(input.slice(0, input.length / 2))
	const rightPart = Array.from(input.slice(input.length / 2))

	for (let i = 0; i < input.length / 2; ++i) {
		const indexOfCommonChar = rightPart.indexOf(leftPart[i])
		const noCommonCharFound = indexOfCommonChar === -1
		if (noCommonCharFound) continue
		else {
			rightPart.splice(indexOfCommonChar, 1)
			++commonChar
		}
	}

	return input.length / 2 - commonChar
}
