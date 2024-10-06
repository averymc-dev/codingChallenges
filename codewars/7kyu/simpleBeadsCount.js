/*Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0. */

function countRedBeads(n) {
  if( n < 2 ){
    return 0
  } else { return n * 2 - 2}
}

countRedBeads(0) // 0
countRedBeads(1) // 0
countRedBeads(3) // 4
countRedBeads(5) // 8
countRedBeads(2212) // 4422

/*TOP SOLUTION
function countRedBeads(n) {
  return n < 2 ? 0 : 2 * n - 2;
}*/