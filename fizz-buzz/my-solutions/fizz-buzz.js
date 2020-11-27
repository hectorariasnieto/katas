export function fizzBuzzea(number){
  let numbers = []

  for (let i = 1 ; i < number ; i++){
    numbers = [1, i]
    if (i%3 === 0 && i%5 === 0){
      numbers.push("fizzbuzz")
    }else if (i%3 === 0){
      numbers.push("fizz")
    }else if (i%5 === 0) {
      numbers.push("buzz")
    }else{
      numbers.push(i + 1)
    }
    return numbers
  }
}
fizzBuzzea(3)
