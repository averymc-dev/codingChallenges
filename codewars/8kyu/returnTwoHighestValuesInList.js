/*In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

*/

function twoHighest(arr) {
  let unique = [...new Set(arr)]
  let sorted = unique.sort((a,b) => (a - b) * -1)
  if(sorted.length <= 2) return sorted
  return sorted.slice(0, 2)
}

twoHighest([]) // []
twoHighest([1, 1, 1])
twoHighest([15, 20, 20, 17]) // [20, 17]

/*TOP SOLUTION
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}*/