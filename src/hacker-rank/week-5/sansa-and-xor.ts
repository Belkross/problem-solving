function sansaXor(integers: number[]): number {
	let result = integers[0]
	for (let i = 2; i < integers.length; i += 2) {
		result ^= integers[i]
	}

	return integers.length % 2 === 0 ? 0 : result
}

