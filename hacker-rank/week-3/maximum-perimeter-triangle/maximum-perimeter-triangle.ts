function maximumPerimeterTriangle(sticks: number[]): number[] {
	const descendingSticks = [...sticks].sort((a, b) => b - a)
	let outputSticks: number[] | undefined = undefined

	for (let i = 0; i < sticks.length - 2; i++) {
		if (descendingSticks[i] < descendingSticks[i + 1] + descendingSticks[i + 2]) {
			const triplet = descendingSticks.slice(i, i + 3)
			outputSticks = triplet.sort((a, b) => a - b)
      break
		}
	}

	return outputSticks || [-1]
}
