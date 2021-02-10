export function fizzBuzz(num: number): (string | number)[] {
  const list: (string | number)[] = []
  //ifElse
  /*
  for (let i: number = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      list.push('fizzBuzz')
    } else if (i % 3 === 0) {
      list.push('fizz')
    } else if (i % 5 === 0) {
      list.push('Buzz')
    } else {
      list.push(i)
    }
  }
  */

  // Ternary
  for (let i: number = 1; i <= num; i++) {
    i % 3 === 0 && i % 5 === 0
      ? list.push('fizzBuzz')
      : i % 3 === 0
      ? list.push('fizz')
      : i % 5 === 0
      ? list.push('Buzz')
      : list.push(i)
  }
  return list
}
