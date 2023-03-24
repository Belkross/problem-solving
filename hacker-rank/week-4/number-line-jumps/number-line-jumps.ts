//const distanceLimit = 10000 WARNING this constraint found in the problem is not respected by the tests
//consider the two kangaroo can jump until infinity

function kangaroo(START1: number, SPEED1: number, START2: number, SPEED2: number): string {
	let kangaroosMet: undefined | boolean = undefined
	let currentPosition1 = START1
	let currentPosition2 = START2

	const kangaroo1ForeverBehind = SPEED1 <= SPEED2

	if (kangaroo1ForeverBehind) {
		kangaroosMet = false
	} else {
		while (currentPosition1 < currentPosition2) {
			currentPosition1 += SPEED1
			currentPosition2 += SPEED2
			if (currentPosition1 === currentPosition2) {
				kangaroosMet = true
				break
			}
		}
		if (kangaroosMet === undefined) kangaroosMet = false
	}

	return kangaroosMet ? "YES" : "NO"
}
