/*  Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string
*/

function reverse(str){
  let result = []
  const punctuation = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  str = str.split('')
  console.log(str)
  // for(let i=0; i<str.length; i++){
  //   console.log(str[i], isNaN(str[i]))
  // }
  str.forEach(x => isNaN(x) || punctuation.includes(x) ? result.push(x) : 'coooll')
  return result.reverse().join('')
}

reverse("krishan") // "nahsirk"
reverse("ultr53o?n") // "nortlu"

//INCOMPLETE