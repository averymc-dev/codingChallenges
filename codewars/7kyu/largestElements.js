/*Write a program that outputs the top n elements from a list.

Example:

k = 2; list = [7, 6, 5, 4, 3, 2, 1]
==> [6, 7]

*/

function largest(num, arr){
  if(num === 0){
    return []
  } else {
    return arr.sort((a, b) => a - b).slice(-num)
  }
}

largest(2, [7, 6, 5, 4, 3, 2, 1]) // [6, 7]
largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // []
largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]) // [-1, 0] 