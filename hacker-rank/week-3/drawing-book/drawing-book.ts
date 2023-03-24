function pageCount(pageTotal: number, pageGoal: number): number {
	const book: number[][] = []
	for (let i = 0; i <= pageTotal; i += 2) book.push([i, i + 1])

	let startBeginCount = 0
	let endBeginCount = 0

	for (const page of book) {
		if (page.includes(pageGoal)) break
		else ++startBeginCount
	}

	for (const page of book.reverse()) {
		if (page.includes(pageGoal)) break
		else ++endBeginCount
	}

	return startBeginCount < endBeginCount ? startBeginCount : endBeginCount
}