function flippingMatrix(matrix: number[][]): number {
	const n = matrix.length
  const highestIndex = matrix.length-1
	const highestElements: number[] = []

	for (let row = 0; row < n / 2; ++row) {
		for (let column = 0; column < n / 2; ++column) {
      const firstEl = matrix[row][column]
      const secondEl = matrix[row][highestIndex-column]
      const thirdEl = matrix[highestIndex-row][column]
      const fourthEl = matrix[highestIndex-row][highestIndex-column]

      const possibilites = [firstEl, secondEl, thirdEl, fourthEl]
      const highestEl = possibilites.reduce((stored, curr) => curr > stored ? curr : stored)
      highestElements.push(highestEl)
    }
	}

	return highestElements.reduce((sum, curr) => sum + curr)
}
