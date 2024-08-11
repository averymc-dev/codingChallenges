/*Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

roundIt(3.45) should return 4

If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

roundIt(34.5) should return 34

If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

roundIt(34.56) should return 35
*/

function roundIt(n){
  let split = n.toString().split('.')
  return split[0].length < split[1].length 
        ? Math.ceil(n) 
        : split[0].length > split[1].length
        ? Math.floor(n)
        : Math.round(n)
}

roundIt(3.45) // 4
roundIt(34.5) // 34
roundIt(34.56) // 35

/*TOP SOLUTION
function roundIt(n){
  var [a, b] = n.toString().split('.');
  return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
}*/