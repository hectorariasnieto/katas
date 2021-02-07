import { beerSong } from './99-bottles'

describe('beerSong', () => {
  it('should sing the last verse of the song', () => {
    const given = 0

    const actual = beerSong(given)

    expect(actual).toBe(
      'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.'
    )
  })

  it('should sing the last two verses of the song', () => {
    const given = 1

    const actual = beerSong(given)

    expect(actual).toBe(
      '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
    )
  })

  it('should sing the last two verses of the song', () => {
    const given = 2

    const actual = beerSong(given)

    expect(actual).toBe(
      '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
    )
  })

  it('should sing the last two verses of the song', () => {
    const given = 3

    const actual = beerSong(given)

    expect(actual).toBe(
      '3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
    )
  })
})
