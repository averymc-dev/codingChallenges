/*
Your task is to write function factorial.
*/

const factorial = n => {
  let result = 1
  for(let i=n; i>0; i--){
    result *= i
  }
  return result
}

factorial(7)