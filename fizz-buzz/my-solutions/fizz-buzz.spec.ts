import { fizzBuzz } from './fizz-buzz'

describe('fizzBuzz', () => {
  it('should change any 3 for fuzz', () => {
    const given: number = 3

    const actual: (string | number)[] = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz'])
  })

  it('should change any 3 for fizz and 5 for Buzz', () => {
    const given: number = 5

    const actual: (string | number)[] = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'Buzz'])
  })

  it('should change any 3 for fizz,  5 for Buzz and 15 for fizzBuzz', () => {
    const given: number = 15

    const actual: (string | number)[] = fizzBuzz(given)

    expect(actual).toEqual([
      1,
      2,
      'fizz',
      4,
      'Buzz',
      'fizz',
      7,
      8,
      'fizz',
      'Buzz',
      11,
      'fizz',
      13,
      14,
      'fizzBuzz'
    ])
  })
})
