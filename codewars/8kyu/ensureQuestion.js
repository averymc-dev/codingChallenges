/*Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.*/

const ensureQuestion = s => {
  const q = s.split('')[s.length-1]
  if(q !== '?'){
    return `${s}?`
  }else { return s }
}

ensureQuestion("Yes") // "Yes?"
ensureQuestion("No?") // "No?"

/*TOP SOLUTION
const ensureQuestion = s => s.endsWith('?') ? s : s+'?'
*/