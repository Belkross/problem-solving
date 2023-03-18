const FAILING_GRADE = 40
const ROUNDING_LIMIT = 2

function gradingStudents(grades: number[]): number[] {
	const roundedGrades: number[] = []

	for (const grade of grades) {
		const failure = grade < FAILING_GRADE - ROUNDING_LIMIT
		if (failure) {
			roundedGrades.push(grade)
		} else {
			const gapToNextMultipleOfFive = 5 - (grade % 5)
			const nextMultipleOfFive = grade + gapToNextMultipleOfFive
			const needToBeRounded = nextMultipleOfFive - grade <= ROUNDING_LIMIT

			if (needToBeRounded) roundedGrades.push(nextMultipleOfFive)
			else roundedGrades.push(grade)
		}
	}

	return roundedGrades
}
