// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// const flip=(d, a)=>{
//   if(d == 'R'){
//     return a.sort()
//   } else { return a.sort().reverse()}
// }

const flip = (d,a) => d == 'R' ? a.sort() : a.sort().reverse()

console.log(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3])
console.log(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1])
console.log(flip('R', [3, 2, 2, 1]), [ 1, 2, 2, 3 ])
console.log(flip('?', [ 13, 2, 4, 7, 93 ]), [ 2, 4, 7, 13, 93 ]) // test case that did not pass
console.log(flip('?', [ 96, 82, 81, 76, 75, 74, 69, …(14) ]), [ 100, 96, 82, 81, 76, 75, 74, …(14) ]) // test case that did not pass

// INCOMPLETE 7/24/2023
// COMPLETED SOLUTION:
function flip(d,a){
  if(d === 'R'){
    return a.sort((a,b) => a - b)
  } else { return a.sort ((a,b) => (b - a)) }
} 

// TOP SOLUTION
const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);
