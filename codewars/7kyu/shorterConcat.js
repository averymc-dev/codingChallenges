/*Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b
*/

function shorterReverseLonger(a,b){
  let arr = [a, b].sort((x, y) => x.length - y.length)
  let short = arr[0]
  let long = arr[1].split('').reverse().join('')
  if(arr[0].length == arr[1].length){
    arr[0] = arr[0].split('').reverse().join('')
    return `${arr[1]}${arr[0]}${arr[1]}`
  }
  return `${short}${long}${short}`
}

shorterReverseLonger("first", "abcde") // "abcdetsrifabcde"
shorterReverseLonger("hello", "bau"  ) // "bauollehbau"
shorterReverseLonger("fghi",  "abcde") // "fghiedcbafghi"

/*TOP SOLUTION
function shorter_reverse_longer(a,b){
  return a.length >= b.length ? b + a.split('').reverse().join('') + b :
  a + b.split('').reverse().join('') + a;
}*/