
export function getPoweredByTwo(numbers){
  const power = []
  for (let i = 0; i < numbers.length; i++){
    power.push(numbers[i] ** 2)
  }
  return power
}