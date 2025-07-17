/*Complete the function which will return the area of a circle with the given radius.

Returned value is expected to be accurate up to tolerance of 0.01.

If the radius is not positive, throw Error.

Example:

circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error
*/

function circleArea(radius){
  if(radius < 1){
    throw Error
  }
  return +(Math.PI * Math.pow(radius, 2)).toFixed(3)
}

circleArea(43.2673) // 5881.248
circleArea(68) // 14526.724
circleArea(0) // Error

// Kata error, not accepting error
// Reads: expected [Function] to throw 'Error' but 'Error' was thrown