export function caesar(phrase: string, increase: number): string {
  const arr: string[] = phrase.split('')
  const newArr: string[] = []

  for (let i: number = 0; i < arr.length; i++) {
    let char: number = 0
    char = arr[i].charCodeAt(0) !== 32 ? arr[i].charCodeAt(0) + increase : 32
    let newChar = String.fromCharCode(char)
    newArr.push(newChar)
    increase++
  }
  return newArr.join('')
}
