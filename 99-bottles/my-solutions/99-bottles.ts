export function beerSong(value: number) {
  const lastVerse: string =
    'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
  const penultimateVerse: string =
    '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.'
  const antepenultimateVerse: string =
    '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.'
  const standardVerse: string = `${value} bottles of beer on the wall, ${value} bottles of beer.\nTake one down and pass it around, ${
    value - 1
  } bottles of beer on the wall.`

  const song = []

  if (value >= 0) {
    if (value > 0) {
      if (value > 1) {
        if (value > 2) {
          song.push(standardVerse)
        }
        song.push(antepenultimateVerse)
      }
      song.push(penultimateVerse)
    }
    song.push(lastVerse)
  }
  return song.join('\n')
}
