function migratoryBirds(birds: number[]): number {
	const frequencies = new Array(5).fill(0)
	for (const bird of birds) ++frequencies[bird - 1]
	const highestFrequency = frequencies.reduce((stored, curr) => (curr > stored ? curr : stored))
	const indexOfHighestFrequency = frequencies.findIndex((frequency) => frequency === highestFrequency)

	return indexOfHighestFrequency + 1
}
