/*Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0*/

function sameCase(a, b){
  if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
      return -1
    }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
        return 1
    }else{
      return 0
    }
}

console.log(sameCase('b', 'a'), 1)
console.log(sameCase('C', 'B'), 1)
console.log(sameCase('A', 's'), 0)
console.log(sameCase('b', 'Z'), 0)
console.log(sameCase('\t', 'Z'), -1)
