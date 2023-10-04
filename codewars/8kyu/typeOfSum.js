/*Return the type of the sum of the two arguments*/

const typeOfSum = (a,b) => {
  res = a+b
  return typeof res
}

typeOfSum(12, 1) //'number'
typeOfSum('d', 1) //'string'

/*TOP SOLUTION
const typeOfSum = (a, b) => typeof(a + b);*/