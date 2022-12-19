/*Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

a is considered "close to" b if margin is greater than or equal to the distance between a and b.

Please note the following:

    When a is close to b, return 0.

Otherwise...

    When a is less than b, return -1.

    When a is greater than b, return 1.

If margin is not given, treat it as zero.

Assume: margin >= 0*/

const closeCompare = (a, b, margin) => {
  if(a < b){
    return margin >= b-a ? 0 : -1
  }else if(b < a){
    return margin >= a-b ? 0 : 1
  }else { return 0 }
}

closeCompare(4, 5) // -1
closeCompare(5, 5) // 0
closeCompare(8.1, 5, 3) // 1
closeCompare(1.99, 5, 3) // -1

/*TOP SOLUTION
function closeCompare(a, b, m = 0){
  return Math.abs(a - b) <= m? 0: Math.sign(a - b);
}
*/