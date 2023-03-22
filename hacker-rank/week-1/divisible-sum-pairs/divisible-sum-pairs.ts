function divisibleSumPairs(arrayLength: number, divisor: number, array: number[]): number {
	let pairCounter = 0

	for (let i = 0; i < arrayLength; ++i) {
		for (let j = i + 1; j < arrayLength; ++j) {
			const sum = array[i] + array[j]
			if (sum % divisor === 0) ++pairCounter
		}
	}

	return pairCounter
}