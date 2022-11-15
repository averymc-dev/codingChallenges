// Find the sum of all multiples of n below m
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

const sumMul = (n,m) => {
  let sum = 0
  if(m <= 0){
    return 'INVALID'
  }
  else {
    for(let i=n; i<m; i++){
      if(i % n == 0){
        sum+=i
      }
      
    }
  }
  return sum
}

console.log(sumMul(0,0), "INVALID")
console.log(sumMul(2,9),20)
console.log(sumMul(4,-7), "INVALID")


//TOP CODEWARS SOLUTION
function sumMul(n,m){
  if (n >= m) return "INVALID";

var sum = 0;
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}