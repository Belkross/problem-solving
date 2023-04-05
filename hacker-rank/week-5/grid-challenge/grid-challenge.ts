function gridChallenge(grid: string[]): string {
	let canBeOrdered = true

	const charCodes = grid.map((string) => Array.from(string, (char) => char.codePointAt(0) as number))
	const ascendingRows = [...charCodes].map((rowOfCodes) => {
		rowOfCodes.sort((a, b) => a - b)
		return rowOfCodes
	})

	for (let columnIndex = 0; columnIndex < grid.length; ++columnIndex) {
		let rowIndex = 0
		while (canBeOrdered && rowIndex < grid.length - 1) {
			const currentElement = ascendingRows[rowIndex][columnIndex]
			const nextElement = ascendingRows[rowIndex + 1][columnIndex]
			const ascendingOrderBreaks = currentElement > nextElement

			if (ascendingOrderBreaks) canBeOrdered = false
			else ++rowIndex
		}
	}

	return canBeOrdered ? "YES" : "NO"
}
