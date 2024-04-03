function countSort(array: string[][]): void {
	const dashReplaced = [...array]
	for (let i = 0; i < dashReplaced.length / 2; ++i) {
		dashReplaced[i][1] = "-"
	}
	dashReplaced.sort((a, b) => Number.parseInt(a[0], 10) - Number.parseInt(b[0], 10))

	const strings = dashReplaced.map((element) => element[1])
	console.log(strings.join(" "))
}

