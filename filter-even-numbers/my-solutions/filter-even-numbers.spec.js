import {evenNumbers} from './filter-even-numbers'

describe('evenNumbers', fn() =>{
  it('should filter even numbers from a given array', function() {
    const given = [1,2,2,3,4,2,5,3,6,4]

    const actual = evenNumbers(given)

    expect(actual).toEqual([1,2,3,4,5,6])
  })

})