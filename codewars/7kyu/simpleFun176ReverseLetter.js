/* Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string
*/

function reverseLetter(str){
  let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i in str){
    if(alpha.includes(str[i])){
      result += str[i]
    }
  }
  return result.split('').reverse().join('')
}

reverseLetter("krishan") // 'nahsirk'
reverseLetter("ultr53o?n") // "nortlu"
reverseLetter("ab23c") // "cba"
reverseLetter("krish21an") // "nahsirk"

/*TOP SOLUTION
function reverseLetter(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            continue;
        }
        reversedString += str[i];
    }
    return reversedString;
}*/