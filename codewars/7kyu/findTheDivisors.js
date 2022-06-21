// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 

function divisors(int){
  let result = []
  for(let i=2; i<int; i++){
    if(int % i == 0){
      result.push(i)
    }
  }
  if(result.length == 0){
    return `${int} is prime`
  } else { return result }
}

console.log(divisors(12), [2,3,4,6])
console.log(divisors(15), [3,5])
console.log(divisors(13))