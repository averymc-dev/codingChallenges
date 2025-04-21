/* Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
  let isAscending = true;
  let isDescending = true;
  
  for(let i=1; i<array.length; i++){
    if(array[i] > array[i - 1]){
      isDescending = false
    }else if(array[i] < array[i - 1]){
      isAscending = false
    }
  }
  return isAscending ? 'yes, ascending' : isDescending ? 'yes, descending' : 'no'
}

isSortedAndHow([1, 2]) // 'yes, ascending'
isSortedAndHow([15, 7, 3, -8]) // 'yes, descending'
isSortedAndHow([4, 2, 30]) // 'no'

/*TOP SOLUTION
function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}*/