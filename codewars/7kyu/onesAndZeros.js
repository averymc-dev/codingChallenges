//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
const binaryArrayToNumber = arr => {
    const binaryString = arr.join('')
    return parseInt(binaryString, 2)
 }

// REFACTOR
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

binaryArrayToNumber([1,0,1,1,1,0,0,1])
binaryArrayToNumber([1,0,0,1])