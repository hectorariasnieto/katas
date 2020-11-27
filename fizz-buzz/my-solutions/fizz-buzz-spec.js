import { fizzBuzzea } from './fizz-buzz'

describe('fizzbuzz', () => {
  it('should change threes', () => {
    const given = [1, 2, 3]

    const actual = fizzBuzzea(given)

    expect(actual).toBe([1, 2, "fizz"])
  })
})

describe('fizzbuzz', () => {
  it('should change fives', () => {
    const given = [1, 2, 3, 4, 5]

    const actual = fizzBuzzea(given)

    expect(actual).toBe([1, 2, "fizz", 4, "Buzz"])
  })
})

describe('fizzbuzz', () => {
  it('should change threes and fives', () => {
    const given = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const actual = fizzBuzzea(given)

    expect(actual).toBe([1, 2, "fizz", 4, "Buzz", "fizz", 7, 8, "fizz", "Buzz", 11, "fizz", 13, 14, "fizzBuzz"])
  })
})