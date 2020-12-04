import { forEach } from './for-each'

describe('forEach', fn () => {
  it ('Given a list of values it should execute a given callback with the element it\'s iterating over', fn () => {
    const given = [1, 2, 3]

    const actual = [given]

    expect(actual).toEqual([1, 2, 3])

  })

})