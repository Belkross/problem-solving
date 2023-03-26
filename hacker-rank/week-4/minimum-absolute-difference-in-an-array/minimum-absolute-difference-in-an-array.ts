function minimumAbsoluteDifference(ARRAY: number[]): number {
	const sortedArray = ARRAY.sort((a, b) => a - b)
	let minAbsoluteDifference = Infinity

	for (let index = 0; index < ARRAY.length - 1; ++index) {
		const currentAbsoluteDifference = Math.abs(sortedArray[index] - sortedArray[index + 1])
		if (currentAbsoluteDifference < minAbsoluteDifference) minAbsoluteDifference = currentAbsoluteDifference
	}

  return minAbsoluteDifference
}
