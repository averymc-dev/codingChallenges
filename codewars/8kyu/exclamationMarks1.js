/*Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.*/

function remove(str){
  str = str.split('').reverse()
  if(str[0] == '!'){
    str.splice(0,1)
  }
  return str.reverse().join('')
}

remove("Hi!") // "Hi"
remove("Hi!!!") // "Hi!!"

/*TOP SOLUTION
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}*/