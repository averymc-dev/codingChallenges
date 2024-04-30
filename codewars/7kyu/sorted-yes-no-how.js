/*Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
  if(array === array.sort((a,b) => b - a)){
    console.log(array)
    return 'y1'
  }else if(array === array.sort((a,b) => b + a)){
    console.log(array)
    return 'y2'
  } else { return 'no'}
}

isSortedAndHow([1, 2]) // 'yes, ascending'
isSortedAndHow([15, 7, 3, -8]) // 'yes, descending'

//INCOMPLETE