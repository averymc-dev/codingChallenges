/*Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...

All elements of the sum are the results of integer division.
Example

25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum(n){
  let sumArr = []
  let divisor = 1
  let num = n
  while(num > 1){
    num = Math.floor(n / divisor)
    sumArr.push(num)
    divisor = divisor * 2
  }
  return (sumArr === undefined || sumArr.length == 0)? 1 : sumArr.reduce((a,b) => a + b)
}

halvingSum(25) // 47
halvingSum(127) // 247

/*TOP SOLUTION
function halvingSum(n) {
  var sum = 0;
  while(n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}*/