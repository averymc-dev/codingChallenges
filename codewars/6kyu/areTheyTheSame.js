/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.*/

function comp(arr1, arr2) {
  if(arr1 == null || arr2 == null || arr1 == [] || arr2 == []){
    return false
  }
  arr1 = arr1.sort((a,b) => a - b)
  arr2 = arr2.sort((a,b) => a - b)
  let counter = 0
  for(let i=0; i<arr1.length; i++){
    if(arr1[i] * arr1[i] == arr2[i]){
      counter++
    }
  }
  return counter == arr2.length
}

comp([121, 144, 19, 161, 19, 144, 19, 11] , [121, 14641, 20736, 361, 25921, 361, 20736, 361]) // true

/*TOP SOLUTION
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}*/