import {
  getWeekNumberFromDate,
  InvalidDateError,
  amountOfDaysFromMonthBunch,
  isLeapYear,
} from "./get-week-number-from-date.ts"

const NON_LEAP_YEAR = 2001
const LEAP_YEAR_REGULAR = 2004
const LEAP_YEAR_MULTIPLE_OF_400 = 2000
const NON_LEAP_YEAR_MULTIPLE_OF_100 = 2100

test("checking if a year is leap", () => {
  expect(isLeapYear(NON_LEAP_YEAR)).toBe(false)
  expect(isLeapYear(LEAP_YEAR_REGULAR)).toBe(true)
  expect(isLeapYear(NON_LEAP_YEAR_MULTIPLE_OF_100)).toBe(false)
  expect(isLeapYear(LEAP_YEAR_MULTIPLE_OF_400)).toBe(true)
})

test("inputed day should be valid", () => {
  //out of range day
  expect(() => getWeekNumberFromDate({ day: 1, month: 1, year: NON_LEAP_YEAR })).not.toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 0, month: 1, year: NON_LEAP_YEAR })).toThrow(InvalidDateError)

  //out of range considering the month
  expect(() => getWeekNumberFromDate({ day: 31, month: 1, year: NON_LEAP_YEAR })).not.toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 32, month: 1, year: NON_LEAP_YEAR })).toThrow(InvalidDateError)

  //out of range considering leap year
  expect(() => getWeekNumberFromDate({ day: 29, month: 2, year: LEAP_YEAR_REGULAR })).not.toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 30, month: 2, year: LEAP_YEAR_REGULAR })).toThrow(InvalidDateError)
})

test("inputed month should be valid", () => {
  expect(() => getWeekNumberFromDate({ day: 1, month: 1, year: NON_LEAP_YEAR })).not.toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 1, month: 13, year: NON_LEAP_YEAR })).toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 1, month: 0, year: NON_LEAP_YEAR })).toThrow(InvalidDateError)
})

test("inputed year should be valid", () => {
  expect(() => getWeekNumberFromDate({ day: 1, month: 1, year: NON_LEAP_YEAR })).not.toThrow(InvalidDateError)
  expect(() => getWeekNumberFromDate({ day: 1, month: 1, year: 0 })).toThrow(InvalidDateError)
})

test("getting the amount of days in a bunch of months", () => {
  expect(amountOfDaysFromMonthBunch({ day: 1, month: 1, year: NON_LEAP_YEAR })).toBe(0)
  expect(amountOfDaysFromMonthBunch({ day: 1, month: 2, year: NON_LEAP_YEAR })).toBe(31)

  //leap year
  expect(amountOfDaysFromMonthBunch({ day: 1, month: 3, year: NON_LEAP_YEAR })).toBe(59)
  expect(amountOfDaysFromMonthBunch({ day: 1, month: 3, year: LEAP_YEAR_REGULAR })).toBe(60)
})

test("cases", () => {
  expect(getWeekNumberFromDate({ day: 1, month: 1, year: NON_LEAP_YEAR })).toBe(1)
  expect(getWeekNumberFromDate({ day: 7, month: 1, year: NON_LEAP_YEAR })).toBe(1)
  expect(getWeekNumberFromDate({ day: 8, month: 1, year: NON_LEAP_YEAR })).toBe(2)

  //last days of the year. A year has on average 52.143 weeks
  expect(getWeekNumberFromDate({ day: 30, month: 12, year: NON_LEAP_YEAR })).toBe(52)
  expect(getWeekNumberFromDate({ day: 31, month: 12, year: NON_LEAP_YEAR })).toBe(53)
  //leap year
  expect(getWeekNumberFromDate({ day: 29, month: 12, year: LEAP_YEAR_REGULAR })).toBe(52)
  expect(getWeekNumberFromDate({ day: 30, month: 12, year: LEAP_YEAR_REGULAR })).toBe(53)

  //cases deduced using a library
  expect(getWeekNumberFromDate({ day: 2, month: 5, year: 2024 })).toBe(18)
  expect(getWeekNumberFromDate({ day: 3, month: 12, year: 2025 })).toBe(49)
})
