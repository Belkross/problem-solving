function minimumNumber(passwordLength: number, password: string): number {
	const PASSWORD_MIN_LENGTH = 6
	let minCharToAdd = 0

	const missSpecialCharacter = /[!@#$%^&*()+\-]/.test(password) === false
	const missUppercase = /[A-Z]/.test(password) === false
	const missLowercase = /[a-z]/.test(password) === false
	const missDigit = /\d/.test(password) === false

	if (missSpecialCharacter) ++minCharToAdd
	if (missUppercase) ++minCharToAdd
	if (missLowercase) ++minCharToAdd
	if (missDigit) ++minCharToAdd

	const passwordTooShort = passwordLength + minCharToAdd < PASSWORD_MIN_LENGTH
	if (passwordTooShort) minCharToAdd = PASSWORD_MIN_LENGTH - passwordLength

	return minCharToAdd
}
