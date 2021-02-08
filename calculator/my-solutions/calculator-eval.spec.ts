import { catKiller } from './calculator-eval'

describe('calculator', () => {
  it('should return the result of a sum', () => {
    const given: string = '1 + 1'

    const actual: number = catKiller(given)

    expect(actual).toBe(2)
  })

  it('should return the result of a substraction', () => {
    const given: string = '1 - 1'

    const actual: number = catKiller(given)

    expect(actual).toBe(0)
  })

  it('should return the result of a sum of many items', () => {
    const given: string = '4 + 2 + 1 + 3'

    const actual: number = catKiller(given)

    expect(actual).toBe(10)
  })

  it('should return the result of differents operations', () => {
    const given: string = '4 - 2 + 1'

    const actual: number = catKiller(given)

    expect(actual).toBe(3)
  })
})
