import { caesar } from './caesar'

describe('caesar', () => {
  it('Should return the next letter of a given one', () => {
    const given: string = 'a'

    const actual: string = caesar(given)

    expect(actual).toBe('b')
  })

  it('Should return the next letter of a given one', () => {
    const given: string = 'abc'

    const actual: string = caesar(given)

    expect(actual).toBe('bdf')
  })

  it('Should return the next letter of a given one', () => {
    const given: string = 'a c'

    const actual: string = caesar(given)

    expect(actual).toBe('b f')
  })
})
