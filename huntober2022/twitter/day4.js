// Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string

// always a string, no funny biz

function reverseStr(str){
  return str.split('').reverse().join('') // Method chain that reverses a string
}

reverseStr("   The white space at the beginning of this string doesn't match the whitespace at the end. ")