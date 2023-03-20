function plusMinus(array: number[]): void {
	const precision = 6
	let positiveAmount = 0
	let negativeAmount = 0
	let nullAmount = 0

	for (const integer of array) {
		if (integer > 0) ++positiveAmount
		else if (integer < 0) ++negativeAmount
		else ++nullAmount
	}

	const positiveRatio = positiveAmount / array.length
	const negativeRatio = negativeAmount / array.length
	const nullRatio = nullAmount / array.length

	console.log(positiveRatio.toFixed(precision))
	console.log(negativeRatio.toFixed(precision))
	console.log(nullRatio.toFixed(precision))
}
