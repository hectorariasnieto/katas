import { sumAll } from './add-all-numbers'

describe('sumAll', () => {
  it('should sum all number from a given array', () => {
    const given = [1, 2]

    const actual: number = sumAll(given)

    expect(actual).toBe(3)
  })

  it('should sum all number from a given array', () => {
    const given = [1, 2, 3]

    const actual: number = sumAll(given)

    expect(actual).toBe(6)
  })

  it('should sum all number from a given array', () => {
    const given = [1, 2, 3, 4, 5, 6]

    const actual: number = sumAll(given)

    expect(actual).toBe(21)
  })
})
