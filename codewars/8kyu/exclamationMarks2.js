/*Remove all exclamation marks from the end of sentence.*/

function remove(str){
  let res = []
  for(let i=str.length-1; i >= 0; i--){
    if(str[i] != '!'){
      res.push(str.slice(0,i+1))
      return res.join('')
    }
  }
}

remove('Hi!') // 'Hi'
remove('!Hi') // '!Hi'
remove("Hi!!!") // 'Hi'

/*TOP SOLUTION
function remove(s)
{
    while(s && s.slice(-1) == "!") 
    { 
        s = s.slice(0,-1) 
    }
    return s;
}*/