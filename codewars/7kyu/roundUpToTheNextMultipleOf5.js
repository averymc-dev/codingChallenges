// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
  return Math.ceil(n / 5) * 5
}

console.log(roundToNext5(6), 10)
console.log(roundToNext5(21), 25)
console.log(roundToNext5(66), 70)