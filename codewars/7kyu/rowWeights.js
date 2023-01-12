/*Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes

    Array size is at least 1.
    All numbers will be positive.
*/

function rowWeights(arr) {
  let weight1 = 0, weight2 = 0, result = []
  arr.map((x,i) => i % 2 == 0 ? weight1 += x : weight2 += x)
  result.push(weight1, weight2)
  return result
}

rowWeights([50,60,70,80]) // [120,140]

/*TOP SOLUTION
function rowWeights(array){
  let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
  let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
  return [t1, t2]
}*/