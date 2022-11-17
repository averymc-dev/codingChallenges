/*Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber/first_number/first-number, find the number which is written in the radially opposite position to firstNumber.
Example

For n = 10 and firstNumber = 2, the output should be 7*/

const circleOfNumbers = (n, firstNumber) => {
  for(let i=0; i<n; i++){
    if(firstNumber + (n/2) >= n){
      return firstNumber - (n/2)
    }else{
      return firstNumber + (n/2)
    }
  }
}

circleOfNumbers(10,2)

/*TOP CODEWARS SOLUTION
function circleOfNumbers(n, firstNumber) {
  return (firstNumber + n/2) % n
}*/