/*Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

Some examples:

([1,2,3,4,5], "value") should return 1
([1,2,3,4,5], "index") should return 0

*/

function min(arr, toReturn) { 
  return  toReturn == 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}

min([1,2,3,4,5], 'value') // 1
min([500,250,750,5000,1000,230], 'value') // 230
min([500,250,750,5000,1000,230], 'index') // 5

/*TOP SOLUTION
function min(arr, toReturn) {
  var val = Math.min.apply(null, arr)
  return toReturn == 'value' ? val : arr.indexOf(val)
}*/