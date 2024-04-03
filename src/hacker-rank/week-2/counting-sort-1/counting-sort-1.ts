const ARRAY_LENGTH = 100

function countingSort(integers: number[]): number[] {
	const frequencies = new Array(ARRAY_LENGTH).fill(0)

	for (const integer of integers) ++frequencies[integer]

	return frequencies
}
