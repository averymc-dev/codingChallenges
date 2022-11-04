//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

const getMiddle = s => {
  s = s.split('')
  const newArr = []
  const findLetter = Math.floor((s.length-1)/2)
  s.length % 2 !== 0 ? newArr.push(s[findLetter]) : newArr.push(s[findLetter], s[findLetter + 1])
  return newArr.join('')
}

getMiddle('sas') // 'a'
getMiddle('Avery') // 'e'
getMiddle('marc') // 'ar'