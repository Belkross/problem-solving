function marsExploration(alteredString: string): number {
	const REPEATED_STRING = "SOS"
	let messageCounter = 0
	let alterationCounter = 0

	const letters = Array.from(alteredString)
	for (const letter of letters) {
		const endOfRepeatedMessage = messageCounter >= REPEATED_STRING.length
		if (endOfRepeatedMessage) messageCounter = 0

		const letterAltered = letter !== REPEATED_STRING.charAt(messageCounter)
		if (letterAltered) ++alterationCounter

		++messageCounter
	}

	return alterationCounter
}
