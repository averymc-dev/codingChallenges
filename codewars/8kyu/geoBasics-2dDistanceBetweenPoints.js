/*Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range −50⩽x,y⩽50 -50 \leqslant x,y \leqslant 50 −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
*/

function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}

//Test object needed for tests

/*TOP SOLUTION
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}*/