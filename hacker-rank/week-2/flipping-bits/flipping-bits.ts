const bitFormat = 32

function flippingBits(integer: number): number {
	const bits = convertTo32Bits(integer)
	const flippedBits = bits.map((bit) => (bit === 0 ? 1 : 0))

	const flippedString = flippedBits.join("")

	return Number.parseInt(flippedString, 2)
}

function convertTo32Bits(integer: number) {
	const radix2String = integer.toString(2)
	const bits = radix2String.split("").map((bit) => Number.parseInt(bit, 10))

	while (bits.length < bitFormat) bits.unshift(0)

	return bits
}
