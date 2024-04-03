const bitFormat = 32

function flippingBits(integer: number): number {
	const radix2String = integer.toString(2)
	const radix2StringFilled = radix2String.padStart(bitFormat, "0")
	const flippedString = radix2StringFilled.replace(/0|1/g, (character) => (character === "0" ? "1" : "0"))

	return Number.parseInt(flippedString, 2)
}
