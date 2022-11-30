/*Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.*/

const nearestSq = n => {
  console.log(Math.sqrt(n))
  if(Math.sqrt(n) == Math.floor(Math.sqrt(n))){
    return n
  }
  lower = Math.floor(Math.sqrt(n))
  console.log(lower)
  higher = Math.ceil(Math.sqrt(n))
  console.log(higher)
  let result1 = n - (lower * lower)
  console.log(result1)
  let result2 = n - (higher * higher)
  console.log(result2)
  return result1 > result2 ? Math.pow(Math.abs(result1), 2) : Math.pow(Math.abs(result2), 2)
}

console.log(nearestSq(1), 1)
console.log(nearestSq(2), 1)
console.log(nearestSq(10), 9)
console.log(nearestSq(111), 121)

/*TOP CODEWARS SOLUTION
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);*/
