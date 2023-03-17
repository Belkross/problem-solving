export {}

function divisibleSumPairs(arrayLength: number, divisor: number, array: number[]): number {
	let numberOfPairs = 0

	for (let i = 0; i < arrayLength; ++i) {
		for (let j = i + 1; j < arrayLength; ++j) {
			if (array[i] === array[j]) continue

			const sum = array[i] + array[j]
			if (sum % divisor === 0) ++numberOfPairs
		}
	}

	return numberOfPairs
}