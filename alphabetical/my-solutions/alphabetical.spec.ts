import { alphabetical } from './alphabetical'

describe('alphabetical', () => {
  it('Should return an alphabetical ordered list of strings', () => {
    const given: string[] = ['b', 'a', 'c']

    const actual: string[] = alphabetical(given)

    expect(actual).toEqual(['a', 'b', 'c'])
  })
})

it('Should return an alphabetical ordered list of words', () => {
  const given: given[] = ['hola', 'amigo', 'k ase']

  const actual: actual[] = alphabetical(given)

  expect(actual).toEqual(['amigo', 'hola', 'k ase'])
})
