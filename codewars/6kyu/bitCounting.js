/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

function countBits(num){
  let result = 0
  num.toString(2).split('').forEach((n) => {
    if(+n === 1){
      result++
    }
  })
  return result
}

countBits(1234) // 5
countBits(4) // 1
countBits(9) // 2