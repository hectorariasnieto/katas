export function whatsHighest(list) {
  let max = 0
  for (let i = 0; i <= list.length; i++){

    if (list[i] > max){
      max = list[i]
    }
  }
  return max
}