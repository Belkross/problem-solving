function birthday(SQUARES: number[], DAY: number, MONTH: number): number {
	let waysCounter = 0

	for (let i = 0; i + MONTH <= SQUARES.length; i++) {
		const barSegment = SQUARES.slice(i, MONTH + i)
		const barSegmentSum = barSegment.reduce((sum, curr) => sum + curr)

		if (barSegmentSum === DAY) ++waysCounter
	}

	return waysCounter
}
