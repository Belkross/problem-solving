export class Fraction {
  public readonly numerator: number
  public readonly denominator: number

  private constructor(numerator: number, denominator?: number) {
    this.numerator = numerator
    this.denominator = denominator ?? 1
  }

  get value(): number {
    return this.numerator / this.denominator
  }

  /**
   * The role of a constructor is to initialise properties and not to validate inputs.
   * That’s why we export the validation process in a static function. Also, we ensure that
   * Fraction creation is done by this static method with a private constructor
   */
  static create(numerator: number, denominator?: number) {
    if (denominator === 0) throw new InfiniteFractionError()

    return new Fraction(numerator, denominator)
  }

  public sum(fraction: Fraction): Fraction {
    if (this.numerator === 0) return fraction
    if (fraction.numerator === 0) return this

    const bothAreIntegers = this.denominator === 1 && fraction.denominator === 1
    const bothHaveSameDenominator = this.denominator === fraction.denominator

    if (bothAreIntegers || bothHaveSameDenominator) {
      return new Fraction(this.numerator + fraction.numerator, this.denominator)
    }

    if (this.denominator !== fraction.denominator) {
      const addedNumerators = this.numerator * fraction.denominator + fraction.numerator * this.denominator
      const commonDenominator = this.denominator * fraction.denominator

      const PGCD = Fraction.findPGCD(addedNumerators, commonDenominator)

      if (PGCD === 1) return new Fraction(addedNumerators, commonDenominator)
      else return new Fraction(addedNumerators / PGCD, commonDenominator / PGCD)
    }

    return this
  }

  public substract(fraction: Fraction): Fraction {
    return this.sum(Fraction.create(-fraction.numerator, fraction.denominator))
  }

  static findPGCD(firstNumber: number, secondNumber: number): number {
    if (secondNumber !== 0) return this.findPGCD(secondNumber, firstNumber % secondNumber)
    else return Math.abs(firstNumber)
  }
}

export class InfiniteFractionError extends Error {
  constructor() {
    super("Cannot divide by 0.")
  }
}
