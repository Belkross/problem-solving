function getTotalX(a: number[], b: number[]): number {
	const highestElementOfA = a.reduce((stored, curr) => curr > stored ? curr : stored)
  const smallestElementOfB = b.reduce((stored, curr) => curr < stored ? curr : stored)

	let counter = 0

	for (let i = highestElementOfA; i <= smallestElementOfB; i++) {
		let respectFirstCondition = true
		for (const integer of a) {
			if (i % integer !== 0) respectFirstCondition = false
		}

		let respectSecondCondition = true
		for (const integer of b) {
			if (integer % i !== 0) respectSecondCondition = false
		}

		if (respectFirstCondition && respectSecondCondition) ++counter
	}

  return counter
}