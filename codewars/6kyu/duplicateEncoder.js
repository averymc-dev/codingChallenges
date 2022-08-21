/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
  word = word.toLowerCase() // Ignore capitalization, had to move this out of the return statement beneath because it wasn't working in there
  return word.split('').map(char => { // Map new array based off logic of indices matching or not
    return word.indexOf(char) === word.lastIndexOf(char) ? '(' : ')' // Logic
  }).join('') // Smash em back together
}

duplicateEncode("Supralapsarian")
// duplicateEncode("recede")