/*Create a method to see whether the string is ALL CAPS.
Examples (input -> output)

"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.*/

String.prototype.isUpperCase = function() {
  let str = Object.values(this)
  for(let i=0; i<str.length; i++){
    if(str[i] == ' '){
      continue;
    }else if(str[i] !== str[i].toUpperCase()){
      return false
    }
  }
  return true
}

'C'.isUpperCase() // true
'hello I AM DONALD'.isUpperCase() // false
'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase() // false
''.isUpperCase() // true
'HELLO I AM DONALD'.isUpperCase() // true
'BOB WALKS HIS DOG EVERY DAY.'.isUpperCase() // true

/*TOP SOLUTION
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}*/