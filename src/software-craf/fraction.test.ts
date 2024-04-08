import { FractionCalculator, InfiniteFractionError, InvalidInputError } from "./fraction.ts"

const calculator = new FractionCalculator()

describe("addition", () => {
  test("input validity: not fractions", () => {
    expect(() => calculator.add("", "")).toThrow(InvalidInputError)
    expect(() => calculator.add("x", "x")).toThrow(InvalidInputError)
  })

  test("input validity: denominator is 0", () => {
    expect(() => calculator.add("1/0", "1/1")).toThrow(InfiniteFractionError)
    expect(() => calculator.add("1/1", "1/0")).toThrow(InfiniteFractionError)
  })

  test("handling the neutral element", () => {
    //hoth members are the neutral element
    expect(calculator.add("0/1", "0/2")).toBe("0")
    //the first member is the neutral element
    expect(calculator.add("0/1", "3/2")).toBe("3/2")
    //the second member is the neutral element
    expect(calculator.add("5/2", "0/1")).toBe("5/2")
  })

  test("adding two fraction with 1 as denominator", () => {
    expect(calculator.add("2/1", "3/1")).toBe("5/1")
  })

  test("adding two fractions that have the same denominator", () => {
    expect(calculator.add("4/7", "2/7")).toBe("6/7")
  })

  test("adding two fraction that have not the same denominator", () => {
    expect(calculator.add("1/2", "1/3")).toBe("5/6")
  })

  test("one of the member is negative", () => {
    expect(calculator.add("-1/2", "1/3")).toBe("-1/6")
  })
  test("both members are negative", () => {
    expect(calculator.add("-1/2", "-1/3")).toBe("-5/6")
  })

  test("case needing a simplification", () => {
    expect(calculator.add("2/3", "2/4")).toBe("7/6")
    expect(calculator.add("1/4", "3/4")).toBe("1/1")
  })
})

describe("find pgcd", () => {
  test("pgcd is 1", () => {
    expect(calculator.findPGCD(3, 2)).toBe(1)
  })

  test("normal case", () => {
    expect(calculator.findPGCD(45, 75)).toBe(15)
  })

  test("one member is negative", () => {
    expect(calculator.findPGCD(-45, 75)).toBe(15)
  })
})
