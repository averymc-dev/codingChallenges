/*Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"

Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"

What you need to think about is how to judge it correctly and effectively and don't forget isNaN().*/

function whatNumberIsIt(n){
  return Number(n) === Number.MAX_VALUE ? `Input number is Number.MAX_VALUE` : Number(n) === Number.MIN_VALUE ? `Input number is Number.MIN_VALUE` : Number(n) === Infinity ? `Input number is Number.POSITIVE_INFINITY` : Number(n) === -Infinity ? `Input number is Number.NEGATIVE_INFINITY` : isNaN(n) ? `Input number is Number.NaN` : `Input number is ${n}`
}

whatNumberIsIt(1/0) // "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) // "Input number is 100"
whatNumberIsIt(-Number.MAX_VALUE*2) // "Input number is Number.NEGATIVE_INFINITY"
whatNumberIsIt(1.7976931348623157e+308) // "Input number is Number.MAX_VALUE")
whatNumberIsIt(NaN) // "Input number is Number.NaN")

/*TOP SOLUTION
function whatNumberIsIt(n){
  switch (true) {
    case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
    case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
    case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
    case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
    case (isNaN(n)): return "Input number is Number.NaN";
    default: return "Input number is " + n;
  }
}*/