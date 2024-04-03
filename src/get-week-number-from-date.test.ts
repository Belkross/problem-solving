import { getWeekNumberFromDate, InvalidDateError, amountOfDaysFromMonth } from "./get-week-number-from-date.ts"

test("inputed day should be valid", () => {
  //out of range day
  expect(() => getWeekNumberFromDate({ day: 1, month: 1, year: 2000 })).not.toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 0, month: 1, year: 2000 })).toThrow(InvalidDateError)

  //out of range considering the month
  expect(() => getWeekNumberFromDate({ day: 31, month: 1, year: 2000 })).not.toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 32, month: 1, year: 2000 })).toThrow(InvalidDateError)

  //out of range considering leap year
  expect(() => getWeekNumberFromDate({ day: 28, month: 2, year: 2000 })).not.toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 29, month: 2, year: 2000 })).toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 29, month: 2, year: 2004 })).not.toThrow(InvalidDateError)
})

test("inputed month should be valid", () => {
  expect(() => getWeekNumberFromDate({ day: 1, month: 1, year: 2000 })).not.toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 1, month: 13, year: 2000 })).toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 1, month: 0, year: 2000 })).toThrow(InvalidDateError)
})

test("inputed year should be valid", () => {
  expect(() => getWeekNumberFromDate({ day: 1, month: 1, year: 2000 })).not.toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 1, month: 1, year: 0 })).toThrow(InvalidDateError)
})

test("calculate the amount of days in a bunch of months", () => {
  expect(amountOfDaysFromMonth({ day: 1, month: 1, year: 2000 })).toBe(0)
  expect(amountOfDaysFromMonth({ day: 1, month: 2, year: 2000 })).toBe(31)

  //leap year
  expect(amountOfDaysFromMonth({ day: 1, month: 3, year: 2000 })).toBe(59)
  expect(amountOfDaysFromMonth({ day: 1, month: 3, year: 2004 })).toBe(60)
})

test("cases", () => {
  expect(getWeekNumberFromDate({ day: 1, month: 1, year: 2000 })).toBe(1)
  expect(getWeekNumberFromDate({ day: 7, month: 1, year: 2000 })).toBe(1)
  expect(getWeekNumberFromDate({ day: 8, month: 1, year: 2000 })).toBe(2)

  //last days of the year. A year has on average 52.143 weeks
  expect(getWeekNumberFromDate({ day: 30, month: 12, year: 2000 })).toBe(52)
  expect(getWeekNumberFromDate({ day: 31, month: 12, year: 2000 })).toBe(53)

  //cases deduced using a library
  expect(getWeekNumberFromDate({ day: 2, month: 5, year: 2024 })).toBe(18)
  expect(getWeekNumberFromDate({ day: 3, month: 12, year: 2025 })).toBe(49)
})
