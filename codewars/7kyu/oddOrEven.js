//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).
const oddOrEven = (arr) => {
    const result = arr.reduce((prev,curr) => prev + curr, 0)
    return (result % 2) !== 0 ? 'odd' : 'even'
  }

// REFACTOR
const oddOrEven = (arr) => (arr.reduce((prev,curr) => prev + curr, 0) % 2) !== 0 ? 'odd' : 'even'

oddOrEven([0, 1, 4]) // 'odd'
oddOrEven([0, -1, -5]) // 'even'