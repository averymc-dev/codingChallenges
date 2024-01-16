/*Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.*/

function mergeArrays(a,b){
  return [...new Set([...a ,...b])].sort((a,b) => a - b)
}

mergeArrays([2, 4, 8], [2, 4, 6]) // [2, 4, 6, 8])

/*TOP SOLUTION
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b)=>a-b);
}*/