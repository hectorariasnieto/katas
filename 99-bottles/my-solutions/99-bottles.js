export class Sing {
  constructor() {} //??

  entireSong(n) {
    if (n < 1) {
      return (
        'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.'
      )
    } else if (n < 2) {
      return (
        '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take it down and pass it around, no more bottles of beer on the wall.'
      )
    } else if (n < 3) {
      return (
        '2 bottles of beer on the wall, 2 bottles of beer.\n' +
        'Take one down and pass it around, 1 bottle of beer on the wall.'
      )
    } else {
      return `${n} bottles of beer on the wall, ${n} bottles of beer.\n' +
      'Take one down and pass it around, ${n - 1} bottles of beer on the wall.`
    }
  }
}
