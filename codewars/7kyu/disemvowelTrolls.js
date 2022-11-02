// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  const newArr = Array.from(str)
  for(i=0; i<newArr.length; i++){ 
    if(newArr[i].toLowerCase()=='a'||newArr[i].toLowerCase()=='e'||newArr[i].toLowerCase()=='i'||newArr[i].toLowerCase()=='o'||newArr[i].toLowerCase()=='u')
      {
        delete newArr[i]
      } 
    }
  return newArr.join('')
}

// REFACTOR
const removeVowel = str => {
  str = str.split('')
  str.forEach((char,ind) => {
    if(char.toLowerCase()=='a'||char.toLowerCase()=='e'||char.toLowerCase()=='i'||char.toLowerCase()=='o'||char.toLowerCase()=='u'){
      delete str[ind]
    }
      
  })
  return str.join('')
}

removeVowel('stra') // 'str'
removeVowel('aeiou') // ''
removeVowel('McDonalds') // 'McDnlds'