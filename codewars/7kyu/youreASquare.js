//Given an integral number, determine if it's a square number

var isSquare = function(n){
    if(Math.sqrt(n)==Math.floor(Math.sqrt(n))){
     return true 
    }else{return false} // fix me
  }

// REFACTOR
const isSquare = n => Math.sqrt(n) == Math.floor(Math.sqrt(n))

isSquare(8) // false
isSquare(9) // true
isSquare(26) // false