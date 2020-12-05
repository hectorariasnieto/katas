import { arrayDeArrays } from './copy.js'

describe('arrayDeArrays', () => {
  it('should unify all arrays in one', () => {

    const given = [[1, 2], [3,4]]

    const actual = arrayDeArrays(...given)

    expect(actual).toEqual([1, 2, 3, 4])
  })
})