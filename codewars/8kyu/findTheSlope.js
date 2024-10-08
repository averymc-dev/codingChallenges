/*Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!).*/

const slope = points => {
  if((points[2]-points[0]) == 0){
    return 'undefined'
  }else { return String((points[3]-points[1])/(points[2]-points[0])) }
}

slope([19,3,20,3]) // '0'
slope([-10,6,-10,3]) // 'undefined'
slope([15,45,12,60]) // "-5"

/*TOP SOLUTION
function slope([ x1, y1, x2, y2 ]) {
  let slope = (y2 - y1) / (x2 - x1);
  return Number.isFinite(slope) ? `${slope}` : 'undefined';
}*/