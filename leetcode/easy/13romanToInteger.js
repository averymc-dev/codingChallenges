// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
    const values = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    }
    let result = 0
    const numeral = s.split('')
    for(let i=0; i<numeral.length; i++){
      let val1 = values[numeral[i]]
      if(i + 1 < numeral.length){
        let val2 = values[numeral[i+1]]
        if(val1 >= val2){
          result += val1
        }else { result += val2 - val1; i++}
      }
      else { result += val1 }
    }
    return result
};

console.log(romanToInt('III'), 3)
console.log(romanToInt("LVIII"), 58)
console.log(romanToInt("MCMXCIV"), 1994)

// https://www.geeksforgeeks.org/javascript-program-for-converting-roman-numerals-to-decimal-lying-between-1-to-3999/