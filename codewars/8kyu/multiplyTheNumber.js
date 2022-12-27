/*Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹
*/

const multiply = num => {
  num2 = Math.abs(num)
  const exp = String(num2).length
  return num * Math.pow(5, exp)
}

multiply(10) // 250
multiply(200) // 25000
multiply(-2) // -10

/*TOP SOLUTION
function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}
*/