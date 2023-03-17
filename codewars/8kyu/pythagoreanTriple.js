/*Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

A Pythagorean Triple consists of arranging 3 integers, such that:

a2 + b2 = c2*/

function isPythagoreanTriple(integers) {
  let n = integers.map(x => x * x)
  if(n[2] == n[0]+n[1]){
    return true
  }else if(n[1] == n[0]+n[2]){
    return true
  }else if(n[0] == n[1]+n[2]){
    return true
  }else { return false }
}

isPythagoreanTriple([3, 4, 5]) // true
isPythagoreanTriple([3, 5, 9]) // false
isPythagoreanTriple([72, 78, 30]) // true

/*TOP SOLUTION
function isPythagoreanTriple(integers) {
  let massiv = integers.sort((a, b) => a - b)
  return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
}*/