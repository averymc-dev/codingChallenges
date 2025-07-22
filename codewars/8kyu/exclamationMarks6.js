/* Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples

remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

*/

function remove(str, num){
  let res = ''
  let count = 0
  for(let char of str){
    if(char == '!' && count < num){
      count++
      continue
    }
    res += char
  }
  return res
}

remove("Hi!", 1) // 'Hi'
remove("Hi!!!",1) // 'Hi!!'

/*TOP SOLUTION
function remove(s,n){
  for (var i=0;i<n;i++) s=s.replace("!","");
  return s;
}*/