function twoArrays(k: number, A: number[], B: number[]): string {
	const descendingA = A.sort((a, b) => b - a)
	const pairStorage = [...B]

	for (const integerA of descendingA) {
		const respectingRelationInB = pairStorage.filter((integerB) => integerA + integerB >= k)

		if (respectingRelationInB.length === 0) return "NO"

		const smallestIntRespectingRelation = respectingRelationInB.reduce((stored, current) =>
			current < stored ? current : stored
		)

		pairStorage.splice(pairStorage.indexOf(smallestIntRespectingRelation), 1)
	}

	return "YES"
}

