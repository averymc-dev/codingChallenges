/*Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false

*/

function safeInteger(int){
  return int < Number.MAX_SAFE_INTEGER
}

safeInteger(9007199254740990) // true
safeInteger(-90) // true
safeInteger(9007199254740992) // false