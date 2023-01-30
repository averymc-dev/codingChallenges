/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
*/

function remove (string) {
  string = string.split('')
  console.log(string)
  let str = []
  for(let i=0; i<string.length; i++){
    if(string[string.length - 1] == '!'){
      console.log('match')
      i++
    }else { str.push(string[i]) }
    
  }
  return str
}

remove('!Hi!')

// INCOMPLETE 1/29/2023