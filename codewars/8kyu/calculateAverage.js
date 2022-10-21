//Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
    if (array[0] > 0){
      return (array.reduce((acc,c) => acc + c, 0)/array.length);
    }else{return 0}
  }

// REFACTORED SOLUTION (3/2/2023)
const findAverage = arr => (arr[0] > 0) ? (arr.reduce((acc,c) => acc + c, 0)/arr.length) : 0

findAverage([2,3,6,9,32,2]) // 9
findAverage([21111,213,644,565,2,77]) // 3768.6666666666665