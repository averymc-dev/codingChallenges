/*Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []

*/

const odds = values => values.filter(x => x % 2 != 0)

odds([2, 4, 6]) // []
odds([1, 3, 5]) // [1, 3, 5]
odds([1, 2, 3, 4, 5, 6]) // [1, 3, 5]

/* TOP SOLUTION
function odds(values){
  return values.filter( v => v%2 );
}
*/