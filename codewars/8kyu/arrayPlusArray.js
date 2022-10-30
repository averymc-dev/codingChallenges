//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
const arrayPlusArray = (arr1,arr2) => {
    return (arr1.reduce((prev, curr) => prev + curr, 0)) + (arr2.reduce((prev,curr) => prev + curr, 0))
  }

// REFACTOR
const sumArrays = (arr1,arr2) => (arr1.reduce((prev, curr) => prev + curr, 0)) + (arr2.reduce((prev,curr) => prev + curr, 0))

sumArrays([1,2,3],[1,2,3]) // 12
sumArrays([12,42,36],[11,52,378]) // 531
sumArrays([22,64,9],[101,42,0]) // 238