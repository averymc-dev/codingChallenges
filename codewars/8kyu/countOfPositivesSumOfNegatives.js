// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    let sum = 0
    let diff = 0
    let final = []
    if(input.includes(null)){
      return final
    }else{  
      input.forEach(x => {    
        if(x>0){
          sum++
        }else{diff+=x}
      });
      if(sum==0&&diff==0){
        return final
      }else{
        final.push(sum,diff)
        return final
      }
      }
}

//FAILED

// SECOND ATTEMPT 2/14/2023
/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array. */

const addPosSubNeg = arr => {
  let positives = 0
  let negative = 0
  let result = []
  arr.includes(null) ? result : arr.forEach(num => {
    num > 0 ? positives++ : negative+=num
  });
  positives == 0 && negative == 0 ? result : result.push(positives, negative);
  return result
}

addPosSubNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) // [10, -65]
addPosSubNeg([0,0]) // []