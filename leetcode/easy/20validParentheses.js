/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type. */

var isValid = function(s) {
  let chars = []
  for(let i=0; i<s.length; i++){
    let curChar = s[i]
    switch (curChar) {
      case '(' : chars.push(')');
        break;
      case '[' : chars.push(']');
        break;
      case '{' : chars.push('}');
        break;
      default :
        lastElement = chars.pop()
        if (curChar !== lastElement) return false;
    }
  }
  return chars.length === 0
};

console.log(isValid("()"), true)
console.log(isValid("(]"), false)

// With help from https://dev.to/urfan/leetcode-valid-parentheses-with-javascript-eh9