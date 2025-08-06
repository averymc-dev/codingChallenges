/*Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.*/

function parseF(s) {
  if(s == String(s)){
    return parseFloat(s)
  } else { return null }
}

parseF("1") // 1.0
parseF("0") // 0

/*UPDATED SOLUTION
function parseF(num){
  return isNaN(parseFloat(num)) ? null : parseFloat(num)
}*/