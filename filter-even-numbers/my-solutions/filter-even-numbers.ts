export function filter(numbers: number[]) {
  // for loop
  /*
  const onlyEven: number[] = []
  for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      onlyEven.push(numbers[i])
    }
  }
  return onlyEven

   */

  // filter
  return numbers.filter(z => z % 2 === 0)
}
