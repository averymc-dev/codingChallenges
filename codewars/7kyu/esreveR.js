/*Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

function reverse(word){
  let revWord = []
  for(let i=word.length-1; i>=0; i--){
    revWord.push(word[i])
  }
  return revWord
}

reverse([1,2,3])