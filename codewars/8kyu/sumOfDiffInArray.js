// Your task is to sum the differences between consecutive pairs in the array in descending order.
const sumOfDifferences = (arr) => {
  arr.sort((a,b) => b - a)
  let sum = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
      sum += arr[i] - arr[i + 1];
  }
  return sum
}

console.log(sumOfDifferences([1,2,10]), 9)

/*TOP CODEWARS SOLUTION
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
*/