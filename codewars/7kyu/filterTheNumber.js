/*Filter the number

Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
Task

Your task is to return a number from a string.
Details

You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/

function filterString(arr){
  let numString = []
  for(let i=0; i<arr.length; i++){
    console.log(arr[i])
    arr[i] == Number(arr[i]) ? numString.push(arr[i]) : false
  }
  console.log(numString.join(''))
}

filterString("a1b2c3") // 123

/*TOP SOLUTION
var FilterString = function(value) {
  return +value.split('').filter(n => !isNaN(n)).join('');
}*/