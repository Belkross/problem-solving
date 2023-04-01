function missingNumbers(missing: number[], brr: number[]): number[] {
	const original = [...brr]

	for (const element of missing) {
		const elementIndexInOriginal = original.indexOf(element)
		const elementMiss = elementIndexInOriginal === -1
    
		if (elementMiss) continue
		else original.splice(elementIndexInOriginal, 1)
	}

	const doublonLessMissing: number[] = []
	for (const element of original) {
		if (!doublonLessMissing.includes(element)) doublonLessMissing.push(element)
	}

	doublonLessMissing.sort((a, b) => a - b)
	return doublonLessMissing
}
