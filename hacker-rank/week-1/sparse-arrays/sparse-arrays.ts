export {}

function matchingStrings(strings: string[], queries: string[]): number[] {
	const occurences: number[] = []

	for (const query of queries) {
		let counter = 0
		for (const string of strings) {
			if (query === string) ++counter
		}
		occurences.push(counter)
	}

	return occurences
}
