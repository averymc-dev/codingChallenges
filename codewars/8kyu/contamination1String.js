/*An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.*/

function contamination(text, char){
  let result = []
  let count = text.length
  for(let i=0; i<count; i++){
    result.push(char)
  }
  return result.join('')
}

contamination("abc","z") // "zzz"
contamination("","z") // ""

/*TOP SOLUTION
function contamination(text, char){
  return char.repeat(text.length)
}*/