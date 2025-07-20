/*Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
*/

function vowelOne(str){
  let res = []
  let vowels = ['a', 'e', 'i', 'o', 'u']
  str = str.toLowerCase().split('')
  for(let i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
      res.push('1')
    }else {res.push('0') }
  }
  return res.join('')
}

vowelOne("abceios") // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"
vowelOne( "vowelOne" ) // "01010101"

/*TOP SOLUTION
function vowelOne(s){
  return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
}*/