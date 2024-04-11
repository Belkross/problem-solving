import { Fraction, InfiniteFractionError } from "./fraction.ts"

describe("addition", () => {
  test("input validity: denominator is 0", () => {
    expect(() => Fraction.create(1, 0)).toThrow(InfiniteFractionError)
  })

  test("handling the neutral element", () => {
    //the first member is the neutral element
    expect(Fraction.create(0).sum(Fraction.create(1, 2)).value).toBe(1 / 2)
    //the second member is the neutral element
    expect(Fraction.create(2, 3).sum(Fraction.create(0)).value).toBe(2 / 3)
    //both members are the neutral element
    expect(Fraction.create(0).sum(Fraction.create(0)).value).toBe(0)
  })

  test("the two fractions are integers", () => {
    expect(Fraction.create(2).sum(Fraction.create(3)).value).toBe(2 + 3)
  })

  test("adding two fractions that have the same denominator", () => {
    expect(Fraction.create(4, 7).sum(Fraction.create(2, 7)).value).toBe(6 / 7)
  })

  test("adding two fraction that have not the same denominator", () => {
    expect(Fraction.create(1, 2).sum(Fraction.create(1, 3)).value).toBe(5 / 6)
  })

  test("case needing a simplification", () => {
    const fraction = Fraction.create(2, 3).sum(Fraction.create(2, 4))
    expect(fraction.value).toBe(14 / 12)
    expect(fraction.numerator).toBe(7)
    expect(fraction.denominator).toBe(6)
  })

  test("one of the member is negative", () => {
    expect(Fraction.create(-1, 2).sum(Fraction.create(1, 3)).value).toBe(-1 / 6)
  })
  test("both members are negative", () => {
    expect(Fraction.create(-1, 2).sum(Fraction.create(1, -3)).value).toBe(-5 / 6)
  })
  test("both members are negative", () => {
    expect(Fraction.create(-1, -2).value).toBe(1 / 2)
  })
})

describe("substraction", () => {
  test("two fractions that have the same denominator", () => {
    expect(Fraction.create(4, 7).substract(Fraction.create(2, 7)).value).toBe(2 / 7)
  })
})

describe("find pgcd", () => {
  test("normal case", () => {
    expect(Fraction.findPGCD(45, 75)).toBe(15)
    expect(Fraction.findPGCD(21, 15)).toBe(3)
  })

  test("pgcd is 1", () => {
    expect(Fraction.findPGCD(3, 2)).toBe(1)
    expect(Fraction.findPGCD(1, 0)).toBe(1)
  })

  test("one member is negative", () => {
    expect(Fraction.findPGCD(-45, 75)).toBe(15)
  })
})
