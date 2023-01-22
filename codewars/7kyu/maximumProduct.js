/*Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
*/

function adjacentElementsProduct(arr){
  let sort = []
  for(let i=0; i<arr.length; i++){
    sort.push(arr[i] * arr[i+1])
  }
  return sort.sort((a,b) => b - a)[0]
}

adjacentElementsProduct([1, 2, 3]) // 6
adjacentElementsProduct([5, 8]) // 40
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]) // 50

// INCOMPLETE