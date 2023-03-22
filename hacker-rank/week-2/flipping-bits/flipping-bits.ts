const bitFormat = 32

function flippingBits(integer: number): number {
	const bits = convertTo32Bits(integer)
	const flippedBits = bits.map((bit) => (bit === 0 ? 1 : 0))

	const flippedString = flippedBits.join("")

	return Number.parseInt(flippedString, 2)
}

function convertTo32Bits(integer: number) {
	const output = new Array(bitFormat).fill(0)

	const radix2String = integer.toString(2)
	const bits = Array.from(radix2String, (bit) => Number.parseInt(bit, 10))

	output.splice(bitFormat - bits.length, bits.length, ...bits)

	return output
}
