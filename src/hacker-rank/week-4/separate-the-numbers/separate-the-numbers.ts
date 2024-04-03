function separateNumbers(query: string): void {
	let isBeautiful = false
	let firstNumber = query[0]

	for (let i = 1; i <= query.length/2; i++) {
		firstNumber = query.slice(0, i)
		let indexSeparator = i
		let nextNumber = BigInt(firstNumber) + BigInt(1)

		while (indexSeparator <= query.length - 1) {
			const startWithNextNumber = new RegExp(`^${nextNumber}`)
			const rightPortion = query.slice(indexSeparator)

			if (startWithNextNumber.test(rightPortion)) {
				indexSeparator += nextNumber.toString().length
				++nextNumber
			} else {
				break
			}
		}

		if (indexSeparator === query.length) {
			isBeautiful = true
			break
		}
	}

	console.log(isBeautiful ? `YES ${firstNumber}` : "NO")
}

