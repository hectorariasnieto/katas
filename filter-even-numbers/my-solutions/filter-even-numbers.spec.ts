import { filter } from './filter-even-numbers'
describe('filter', () => {
  it('should filter even numbers from a given array', () => {
    const given: number[] = [1, 2, 3]

    const actual: number[] = filter(given)

    expect(actual).toEqual([2])
  })
})
