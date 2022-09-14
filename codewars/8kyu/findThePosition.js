/*
When provided with a letter, return its position in the alphabet.
*/

function position(letter){
  const alpha = ['abcdefghijklmnopqrstuvwxyz'].toString().split('')
  return `Position of alphabet: ${alpha.indexOf(letter)+1}`
}

position("a")
position("e")