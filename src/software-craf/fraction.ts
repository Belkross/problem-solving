interface IFractionCalculator {
  add: (firstMember: string, secondMember: string) => string
  substract: (firstMember: string, secondMember: string) => string
  multiply: (firstMember: string, secondMember: string) => string
  divide: (firstMember: string, secondMember: string) => string
  checkInputsValidity: (firstMember: string, secondMember: string) => void
  findPGCD: (firstNumber: number, secondNumber: number) => number
}

export class InvalidInputError extends Error {
  constructor() {
    super("Invalid input.")
  }
}

export class InfiniteFractionError extends Error {
  constructor() {
    super("Cannot divide by zero.")
  }
}

export class FractionCalculator implements IFractionCalculator {
  add(firstMember: string, secondMember: string): string {
    this.checkInputsValidity(firstMember, secondMember)

    const [firstNumerator, firstDenominator] = firstMember.split("/").map((string) => Number(string))
    const [secondNumerator, secondDenominator] = secondMember.split("/").map((string) => Number(string))
    let commonDenominator, addedNumerators

    if (firstNumerator === 0 && secondNumerator === 0) return "0"
    if (firstNumerator === 0) return `${secondNumerator}/${secondDenominator}`
    if (secondNumerator === 0) return `${firstNumerator}/${firstDenominator}`

    if (firstDenominator !== secondDenominator) {
      commonDenominator = firstDenominator * secondDenominator
      addedNumerators = firstNumerator * secondDenominator + secondNumerator * firstDenominator
    } else {
      commonDenominator = firstDenominator
      addedNumerators = firstNumerator + secondNumerator
    }

    // s’assurer que la fraction est irréductible
    const PGCD = this.findPGCD(addedNumerators, commonDenominator)
    if (PGCD === 1) return `${addedNumerators}/${commonDenominator}`

    return `${addedNumerators / PGCD}/${commonDenominator / PGCD}`
  }

  substract(firstMember: string, secondMember: string): string {
    return ""
  }

  multiply(firstMember: string, secondMember: string): string {
    return ""
  }

  divide(firstMember: string, secondMember: string): string {
    return ""
  }

  checkInputsValidity(firstMember: string, secondMember: string): void {
    const [firstNumerator, firstDenominator] = firstMember.split("/").map((string) => Number(string))
    const [secondNumerator, secondDenominator] = secondMember.split("/").map((string) => Number(string))

    if (firstDenominator === 0 || secondDenominator === 0) throw new InfiniteFractionError()

    const regex = /^-{0,1}\d+\/\d+$/
    const firstMemberInvalid = regex.test(firstMember) === false
    const secondMemberInvalid = regex.test(secondMember) === false

    if (firstMemberInvalid || secondMemberInvalid) throw new InvalidInputError()
  }

  findPGCD(firstNumber: number, secondNumber: number): number {
    const a = Math.abs(firstNumber)
    const b = Math.abs(secondNumber)

    const firstNumberDividers: Array<number> = []
    for (let i = 1; i <= a; ++i) {
      if (firstNumber % i === 0) firstNumberDividers.push(i)
    }

    const secondNumberDividers: Array<number> = []
    for (let i = 1; i <= a; ++i) {
      if (secondNumber % i === 0) secondNumberDividers.push(i)
    }

    const commonDividers = firstNumberDividers.filter((divider) => secondNumberDividers.includes(divider))

    return commonDividers.at(-1) ?? 1
  }
}
