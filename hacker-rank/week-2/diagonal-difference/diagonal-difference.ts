function diagonalDifference(rows: number[][]): number {
	const firstDiagonalElements = rows.map((row, i) => row[i])
	const secondDiagonalElements = rows.map((row, i) => row[rows.length - 1 - i])

	const firstDiagonalSum = firstDiagonalElements.reduce((prev, curr) => prev + curr)
	const secondDiagonalSum = secondDiagonalElements.reduce((prev, curr) => prev + curr)

	return Math.abs(firstDiagonalSum - secondDiagonalSum)
}
