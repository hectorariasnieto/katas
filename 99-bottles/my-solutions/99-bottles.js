export class Sing {
  constructor() {} //??

  lastVerse(){
    return 'No more bottles of beer on the wall, no more bottles of beer.\n' +
      'Go to the store and buy some more, 99 bottles of beer on the wall.'
  }

  penultimateVerse(){
    return '1 bottle of beer on the wall, 1 bottle of beer.\n' +
      'Take it down and pass it around, no more bottles of beer on the wall.'
  }

  antepenultimateVerse(){
    return '2 bottles of beer on the wall, 2 bottles of beer.\n' +
      'Take one down and pass it around, 1 bottle of beer on the wall.'
  }

  anyVerse(n){
    return `${n} bottles of beer on the wall, ${n} bottles of beer.\n' +
      'Take one down and pass it around, ${n - 1} bottles of beer on the wall.`
  }
}
  entireSong(){
    for (let i = 99; i >= 0; i--) {
      if (i > 1) {
        return Sing.anyVerse
/*
      } else if (i > 0) {
        return ??

      } else {
        return (
          i +
          ' bottles of beer on the wall, ' +
          i +
          ' bottles of beer.\n' +
          'Take one down and pass it around, ' +
          (i - 1) +
          'bottles of beer on the wall.'
        )
      }

      */
    }
  }
}
