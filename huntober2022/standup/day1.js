// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

function fizzBuzz(int){
    // looping through numbers up to int
    for(let i=1; i<=int; i++){
      
      // check for divisible by 3 && 5
      if(i % 3 == 0 && i % 5 == 0){
        console.log('Fizz Buzz')
      }
      // check for divisible by 3
      else if(i % 3 == 0){
        console.log('Fizz')
      }
      // check for divisiblity 5
      else if(i % 5 == 0){
        console.log('Buzz')
      } 
      // simply console.log the number
      else { console.log(i) }
    }
  }
  
  fizzBuzz()
  fizzBuzz(15)
  // fizzBuzz(365)