/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

function divCon(x){
  // iterate through array
  // check for string or number
  let nonString = x.filter(num => typeof num === 'number')
  let string = x.filter(num => typeof num === 'string')
  
  // add non-string ints
  // add string ints
  // return difference
  return nonString.reduce((a,c) => a + c, 0) - string.map(x => +x).reduce((a,c) => a + c, 0)
}

divCon([9, 3, '7', '3']) // 2
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]) // 14