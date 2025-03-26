/*Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples

 123 ->  321
-456 -> -654
1000 ->    1

*/

function reverseNumber (num) {
  const strNum = String(num).split('')
  if(strNum[0] === '-'){
    strNum.shift()
    return -+strNum.map(Number).reverse().join('')
  }
  return +strNum.map(Number).reverse().join('')
}

reverseNumber(123) // 321
reverseNumber(-456) // -654

/*TOP SOLUTION
function reverseNumber(n) {
  let isNegative = n < 0;  
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseAsString);
  
  return isNegative ? -result : result;
}*/