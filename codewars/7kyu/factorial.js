/*
Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw a RangeError (JavaScript) or return -1 (C).
*/

function factorial(n)
{
  let arr = []
  if(n < 0 || n > 12){
    throw new RangeError("The argument must be between 0 and 12.");
  }
  for(let i=n; i>0; i--){
    arr.push(i)
  }
  return arr.reduce((a,b) => a * b, 1)
}

factorial(3)