/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.*/

function shortcut(word){
  word = Array.from(word)
  word.forEach((char,ind) => { 
    if(char.toLowerCase()=='a'||char.toLowerCase()=='e'||char.toLowerCase()=='i'||char.toLowerCase()=='o'||char.toLowerCase()=='u'){
      delete word[ind]
    }
  })
  return word.join('')
}

shortcut("hello") // "hll"

/*TOP SOLUTION
function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}*/