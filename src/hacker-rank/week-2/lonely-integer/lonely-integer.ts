function lonelyinteger(integers: number[]): number {
	let output = NaN

	integers.sort((a, b) => a - b)

	for (let i = 0; i < integers.length; i += 2) {
		const isLastElement = i === integers.length - 1
		const differentFromNext = integers[i] !== integers[i + 1]

		if (isLastElement || differentFromNext) {
			output = integers[i]
			break
		} else continue
	}

	return output
}
