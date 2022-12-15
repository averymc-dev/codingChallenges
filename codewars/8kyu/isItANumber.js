/*Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.*/

const isDigit = s => {
  if(Math.sign(s) == 1 || Math.sign(s) == -1 || Math.sign(s) == 0 || Math.sign(s) == -1) {
    return true
  }else { return false}
}

isDigit('s2324') //false
isDigit('-234.4') //true
isDigit("3") //true
isDigit("  3  ") //true
isDigit("-3.23") //true
isDigit("3-4") //false
isDigit("  3   5") //false
isDigit("3 5") //false
isDigit("zero") //false

/*TOP SOLUTION
function isDigit(s) {
 return s==parseFloat(s);
}
*/