function closestNumbers(ARRAY: number[]): number[] {
	const sortedArray = [...ARRAY].sort((a, b) => a - b)
	const smallestDiffPairs: number[] = []
	let smallestAbsDifference = Infinity

	for (let i = 0; i < sortedArray.length - 1; ++i) {
		const currAbsDifference = Math.abs(sortedArray[i] - sortedArray[i + 1])
		if (currAbsDifference < smallestAbsDifference) smallestAbsDifference = currAbsDifference
	}

	for (let i = 0; i < sortedArray.length - 1; ++i) {
		if (Math.abs(sortedArray[i] - sortedArray[i + 1]) === smallestAbsDifference)
			smallestDiffPairs.push(sortedArray[i], sortedArray[i + 1])
	}

	return smallestDiffPairs
}
