/*Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.*/

function cubeOdd(arr) {
  let odds = []
  let cubed = arr.map(el => Math.pow(el, 3))
  if(arr.filter(el => typeof(el) == 'number').length == arr.length){
    for(let el in cubed){
      if(cubed[el] % 2 != 0) odds.push(cubed[el])
    }
    return odds.reduce((a,b) => a + b, 0)
  } else { return undefined }
}

cubeOdd([1, 2, 3, 4]) // 28
cubeOdd([-3,-2,2,3]) // 0
cubeOdd(["a",12,9,"z",42]) // undefined

/*TOP SOLUTION
let cubeOdd = a => {
  var isNumeric = a.every(x=>!isNaN(x))
  return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
}*/