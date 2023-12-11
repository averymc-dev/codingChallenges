/*Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds(val){
  let result = []
  for(let i=0; i<val.length; i++){
    if(val[i] % 2 == 0){
      result.push(val[i])
    }
  }
  return result
}

noOdds([0,1]) // [0]
noOdds( [0,1,2,3] ) // [0,2]

/*TOP SOLUTION
var noOdds = values => values.filter(x => x % 2 === 0);*/
