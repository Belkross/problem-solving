function lonelyinteger(integers: number[]): number {
	integers.sort((a, b) => a - b)

	for (let i = 0; i < integers.length; i += 2) {
		const isLastElement = i === integers.length - 1
		const occursOnce = integers[i] !== integers[i + 1]

		if (isLastElement || occursOnce) return integers[i]
		else continue
	}

	return NaN //should never happen since the inputs are always valid
}