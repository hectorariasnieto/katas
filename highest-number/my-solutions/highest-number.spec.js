import { whatsHighest } from './highest-number.js'

describe('highest', () => {
  it('should get the highest number', () => {
    const given = [1,2,3]

    const actual = whatsHighest(given)

    expect(actual).toBe(3)
  })
})