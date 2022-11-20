/*Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"*/

const printArray = (array) => {
  let result = []
  array.forEach((x) => {
    result.push(String(x))
  })
  return result.join(',')
}

console.log(printArray(['h','o','l','a']), 'h,o,l,a')
console.log(printArray([2,4,5,2]), '2,4,5,2')

/*TOP CODEWARS SOLUTION
function printArray(array){
  return array.join();
}*/