/*Find the mean (average) of a list of numbers in an array.*/

function findAverage(nums){
  return nums.reduce((a,c) => a + c, 0) / nums.length
}

findAverage([1]) // 1
findAverage([1, 3, 5, 7]) // 4