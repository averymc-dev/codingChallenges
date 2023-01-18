/*We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters). */

function vowelIndices(word){
  word = word.toLowerCase()
  let arr = []
  const vowel = 'aeiouy'.split('')
  for(let i=0; i<vowel.length; i++){
    for(let j=0; j<word.length; j++){
      if(vowel[i] == word[j]){
        arr.push(j + 1)
      }
    }
  }
  return arr.sort((a,b) => a - b)
}

vowelIndices("mmm") // []
vowelIndices("apple") // [1,5]
vowelIndices("supercalifragilisticexpialidocious") //  [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]
vowelIndices('MAzBFWoLOnRoMsgioMrIrflUp') // [ 2, 7, 9, 12, 16, 17, 20, 24 ]

/*TOP SOLUTION
function vowelIndices(word){
  const str = 'aeiouy';
  const arr = word.toLowerCase().split('');
  let answer = [];
  arr.forEach((name, i) => {
    if (str.indexOf(name) !== -1) {
      answer.push(i + 1);
    }
  });
  return answer;
}*/