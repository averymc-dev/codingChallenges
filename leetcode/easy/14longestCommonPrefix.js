/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

var longestCommonPrefix = function(strs) {
  let prefix = '' // Declare empty string
  if(strs === null || strs.length === 0) return prefix // Conditional to check for empty strings, and returns out
  for(let i=0; i<strs[0].length; i++){ // Loop through first word of strs array
    const char = strs[0][i] // Declare variable of letter to compare
    for(let j=1; j<strs.length; j++){ // Loop through all other words of strs array
      if(strs[j][i] !== char) return prefix // Once letters from one array to the next don't match, it returns our string
    }
    prefix += char // Concatenates matching letter into string
  }
  return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]), 'fl')
console.log(longestCommonPrefix([""]), '')

// https://dev.to/urfan/leetcode-longest-common-prefix-with-javascript-32ca