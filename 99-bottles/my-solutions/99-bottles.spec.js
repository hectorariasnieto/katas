import { Sing } from './99-bottles'

describe('Sing', fn () => {
  it ('Should sing the entire song 99 Bottles', fn () =>{

    const canta = new Sing()

    const actual = canta.lastVerse()

    expect(actual).toBe('No more bottles of beer on the wall, no more bottles of beer.\n' +
      'Go to the store and buy some more, 99 bottles of beer on the wall.')


  })

})
