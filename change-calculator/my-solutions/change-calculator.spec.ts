import { giveMeChange } from './change-calculator'

describe('giveMeChange', () => {
  it('should give two bill of 50', () => {
    const given: number = 100

    const actual: string[] = giveMeChange(given)

    expect(actual).toEqual(['2 bill(s) of 50'])
  })

  it('should give 1 bill of 50 and 1 bill of 20', () => {
    const given: number = 70

    const actual: string[] = giveMeChange(given)

    expect(actual).toEqual(['1 bill(s) of 50', '1 bill(s) of 20'])
  })
})
