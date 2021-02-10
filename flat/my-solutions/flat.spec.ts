import { flatArr } from './flat'
describe('flatArr', () => {
  it('should flat an array of arrays', () => {
    const given: unknown = [
        [3, 4],
        [1, 2]
      ],
      actual: any = flatArr(given)

    expect(actual).toEqual([3, 4, 1, 2])
  })
})
