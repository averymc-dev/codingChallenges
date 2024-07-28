/*There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/

function correctPolishLetters (string) {
  let result = []
  let letters = {
    'ą' : 'a',
    'ć' : 'c',
    'ę' : 'e',
    'ł' : 'l',
    'ń' : 'n',
    'ó' : 'o',
    'ś' : 's',
    'ź' : 'z',
    'ż' : 'z'
  }
  for(let i=0; i<string.length; i++){
    if(string[i] in letters){
      result.push(letters[string[i]])
    }else { result.push(string[i]) }
  }
  return result.join('')
}

correctPolishLetters("Jędrzej Błądziński") // "Jedrzej Bladzinski"

/*TOP SOLUTION
var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}*/