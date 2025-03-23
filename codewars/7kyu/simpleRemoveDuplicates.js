/*Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:

For input: [3, 4, 4, 3, 6, 3]

    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3

Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/

function solve(arr) {
  let answer = []
  while(arr.length > 0){
    const val = arr.pop()
    if (!answer.includes(val)){
      answer.push(val)
    }
  }
  return answer.reverse();
}

solve([3,4,4,3,6,3]) // [4,6,3]
solve([1,2,1,2,1,2,3]) // [1,2,3]

/*TOP SOLUTION
function solve(arr){
  return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}
*/
