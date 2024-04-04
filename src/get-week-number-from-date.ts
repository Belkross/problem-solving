/**
 * A year has 52 weeks. Returns to which week belongs a day
 */
export function getWeekNumberFromDate(date: DateObject): number {
  const { day, month, year } = date

  const yearInvalid = year <= 0
  const monthInvalid = month < 1 || month > 12
  const dayInvalid = checkDayValidity(date) === false

  if (yearInvalid || monthInvalid || dayInvalid) throw new InvalidDateError()

  let amountOfDays = day + amountOfDaysFromMonth(date)
  let week = 1
  let dayCounter = 0

  while (amountOfDays > 0) {
    if (dayCounter >= NUMBER_OF_DAY_IN_WEEK) {
      ++week
      dayCounter = 0
    }

    --amountOfDays
    ++dayCounter
  }

  return week
}

export function amountOfDaysFromMonth(date: DateObject) {
  const { month, year } = date
  const dayPerMonth = getDaysPerMonth(isLeapYear(year))

  let amount = 0

  for (let i = 1; i < month; ++i) {
    amount += dayPerMonth[i as keyof typeof dayPerMonth]
  }

  return amount
}

function checkDayValidity(date: DateObject): boolean {
  const { day, month, year } = date

  const yearInvalid = year <= 0
  const monthInvalid = month < 1 || month > 12
  const dayOutOfRange = day < 1 || day > 31
  if (yearInvalid || monthInvalid || dayOutOfRange) return false

  const dayPerMonth = getDaysPerMonth(isLeapYear(year))

  const dayOutOfMonthRange = day > dayPerMonth[month as keyof typeof dayPerMonth]
  if (dayOutOfMonthRange) return false

  return true
}

export function isLeapYear(year: number) {
  const isMultipleOf100 = year % 100 === 0
  const isMultipleOf4 = year % 4 === 0
  const isMultipleOf400 = year % 400 === 0

  return (isMultipleOf4 && !isMultipleOf100) || isMultipleOf400
}

function getDaysPerMonth(isLeapYear: boolean) {
  return {
    1: 31,
    2: isLeapYear ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }
}

const NUMBER_OF_DAY_IN_WEEK = 7

type DateObject = {
  day: number
  month: number
  year: number
}

export class InvalidDateError extends Error {
  constructor() {
    super("Date is invalid.")
  }
}
