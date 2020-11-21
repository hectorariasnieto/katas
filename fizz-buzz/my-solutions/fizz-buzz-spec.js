import { fizzBuzzea } from './fizz-buzz'

describe('fizzbuzz', () => {
  it('should change threes and fives', () => {
    const given = [1, 2, 3]

    const actual = fizzBuzzea(given)

    expect(actual).toBe([1, 2, "fizz"])
  })
})