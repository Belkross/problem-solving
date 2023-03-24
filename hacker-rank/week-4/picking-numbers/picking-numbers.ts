function pickingNumbers(ARRAY: number[]): number {
	let longestLength = 1

	const sortedArray = [...ARRAY].sort((a, b) => a - b)

	for (const [indexStartInt, startInt] of sortedArray.entries()) {
		let currentLongestLength = 1
		for (let i = indexStartInt + 1; i < sortedArray.length; ++i) {
			const respectRelation = Math.abs(startInt - sortedArray[i]) <= 1
			if (respectRelation) {
				++currentLongestLength
				if (currentLongestLength > longestLength) longestLength = currentLongestLength
			} else {
				break
			}
		}
	}

	return longestLength
}
