/*This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.*/

const derive = (coeff, exp) => {
  let mult = coeff * exp
  exp = exp - 1
  return `${mult}x^${exp}`
}

console.log(derive(7,8))

/*TOP SOLUTION
function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}*/