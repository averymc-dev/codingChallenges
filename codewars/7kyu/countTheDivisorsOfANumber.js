/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000. */

function getDivisorsCnt(int){
  let count = []
  for(let i=1; i<=int; i++){
    if(int % i == 0){
      count.push(i)
    }
  }
  return count.length
}

getDivisorsCnt(12)
getDivisorsCnt(35)
getDivisorsCnt(89)

// TOP CODEWARS SOLUTION
function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  
  return d;
}