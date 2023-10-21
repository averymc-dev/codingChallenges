/*The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times). Note: Math.pow and some other Math functions like eval() and ** are disabled.*/

const numberToPower = (a,b) => {
  let ans = 1
  for(let i=1; i<=b; i++){
    ans *= a
  }
  return ans
}

power(3,2) // 9
power(2,3) // 8