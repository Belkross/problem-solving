function miniMaxSum(array: number[]): void {
	const ascendingArray = array.sort((a, b) => a - b)

	const fourFirstElements = ascendingArray.slice(0, 4)
	const minSum = fourFirstElements.reduce((sum, curr) => sum + curr)

	const fourLastElements = ascendingArray.slice(1)
	const maxSum = fourLastElements.reduce((sum, curr) => sum + curr)

	console.log(`${minSum} ${maxSum}`)
}
