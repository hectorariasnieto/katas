import { caesar } from './caesar'

describe('caesar', () => {
  it('Should return the next letter of a given one', () => {
    const given: string = 'a'

    const actual: string = caesar(given, 1)

    expect(actual).toBe('b')
  })

  it('Should return the next letter of a given one', () => {
    const given: string = 'abc'

    const actual: string = caesar(given, 2)

    expect(actual).toBe('ceg')
  })

  it('Should return the next letter of a given one', () => {
    const given: string = 'a c'

    const actual: string = caesar(given, 1)

    expect(actual).toBe('b f')
  })
})
