function sockMerchant(arrayLength: number, array: number[]): number {
	let pairsCounter = 0

	array.sort((a, b) => a - b)
	for (let i = 0; i < arrayLength - 1; ++i) {
		if (array[i] === array[i + 1]) {
			++pairsCounter
			++i
		}
	}

	return pairsCounter
}
