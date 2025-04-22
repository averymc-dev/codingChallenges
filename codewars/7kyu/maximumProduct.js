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

// COMPLETED 4/22/2025
/*Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.
Examples

    [1, 2, 3] returns 6 because the maximum product is obtained from multiplying  2∗3=6
    [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying  5∗10=50
    [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying  −2∗7=−14
*/

function adjacentElementsProduct(arr){
  let prod = []
  for(let i=1; i<arr.length; i++){
    prod.push(arr[i] * arr[i-1])
  } 
  return prod.sort((a,b) => a - b).reverse()[0]
}

/*TOP SOLUTION
function adjacentElementsProduct(array) {
  let newArr = []
  for(i=0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
  }  
  return Math.max(...newArr)
}*/