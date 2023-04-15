/*Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.*/

function isOpposite(s1,s2){
  let stringRes = ''
  s1 = s1.split('')
  s2 = s2.split('')
  if(s1.length !== s2.length || s1.length == 0 || s2.length == 0){
    return false
  }
  s1.forEach((x, i) => {
    x == x.toUpperCase() ? stringRes += x.toLowerCase() : stringRes += x.toUpperCase();
  })
  s1 = s1.join('')
  s2 = s2.join('')
  return stringRes == s2
}

isOpposite("ab","AB") // true

/*TOP SOLUTION
function isOpposite(s1,s2){
  if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
  
  for(var i = 0; i < s1.length; i++) {
    if(s1.charAt(i) === s2.charAt(i)) return false;
  }
  
  return true;
  
}*/