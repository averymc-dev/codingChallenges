// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

function everyNth(str, n){
  str = str.split('')
  for(let i=0; i<=str.length; i++){
    if(i % n === 0 && i != 0){
      console.log(i)
      str.splice(i-1,1) // stuck
    }
  }
  return str.join('')
}

console.log(everyNth("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4))
// console.log(everyNth("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5))