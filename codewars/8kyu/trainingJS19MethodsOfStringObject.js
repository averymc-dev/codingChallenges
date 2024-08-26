/*Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

for example:

alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"

A small hint: The first conversion of the entire string will make the code easier*/

function alienLanguage(str){
  const words = str.split(' ')
  let result = []
  for(let i=0; i<words.length; i++){
    let word = words[i]
    let lastIndex = word.length - 1
    let butLast = word.slice(0, lastIndex).toUpperCase()
    let lastLetter = word[lastIndex].toLowerCase()
    let resultWord = butLast + lastLetter
    result.push(resultWord)
  }
  return result.join(' ')
}

alienLanguage("My name is John") // "My NAMe Is JOHn"

/*TOP SOLUTION
function alienLanguage(str){
  var words = str.toUpperCase().split(" ");
  for (var i = 0; i < words.length; i++) {
    var precedingChars = words[i].slice(0, -1);
    var lastChar = words[i].slice(-1).toLowerCase();  
    words[i] = precedingChars + lastChar;
  }
  return words.join(" ");
}*/