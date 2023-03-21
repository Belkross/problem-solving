function timeConversion(input: string) {
	let hours = input.slice(0, 2)
	const minutes = input.slice(3, 5)
	const seconds = input.slice(6, 8)
	const dayPart = input.slice(8)

	if (dayPart === "PM" && hours !== "12") {
		hours = (Number.parseInt(hours, 10) + 12).toString()
	} else if (dayPart === "AM" && hours === "12") {
		hours = "00"
	}

	return `${hours}:${minutes}:${seconds}`
}
