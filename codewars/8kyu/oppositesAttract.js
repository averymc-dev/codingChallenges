//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

function lovefunc(flower1, flower2){
    // moment of truth
    if(flower1 % 2 === 0 && flower2 % 2 === 1){
      return true
    }else if(flower1 % 2 === 1 && flower2 % 2 === 0){
      return true
    }else{return false}
  }

// REFACTORED

const loveMeNot = (f1, f2) => ((f1 % 2 === 0 && f2 % 2 === 1) || (f1 % 2 === 1 && f2 % 2 === 0)) 

console.log(loveMeNot(0,0), false)
console.log(loveMeNot(0,1), true)
console.log(loveMeNot(2,2), false)