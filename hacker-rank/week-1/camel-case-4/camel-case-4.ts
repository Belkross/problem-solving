let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
	return inputLines[currentLine++];
}

//ignore the content above

function main() {
	while (currentLine < inputLines.length) {
			const input = readLine() as string
			const [operation, type, string] = input.split(";")
			let output: string | undefined = undefined

			if (operation === "S") {
					const lowercaseAndSpaceSeparated = string.replace(/[A-Z]/g, (character) => ` ${character.toLowerCase()}`)
					if (type === "V") output = lowercaseAndSpaceSeparated
					else if (type === "C") output = lowercaseAndSpaceSeparated.trimStart()
					else if (type === "M") output = lowercaseAndSpaceSeparated.replace(/\(|\)/g, "")
			} else if (operation === "C") {
					const uppercased = string.replace(/(?<=\s)[a-z]/g, (character) => character.toUpperCase())
					const uppercasedAndNoSpaces = uppercased.replace(/\s/g, "")
					if (type === "V") output = uppercasedAndNoSpaces
					if (type === "C") output = uppercasedAndNoSpaces.replace(/[a-z]/, (character) => character.toUpperCase())
					if (type === "M") output = uppercasedAndNoSpaces + "()"
			}

			console.log(output)
	}
}
