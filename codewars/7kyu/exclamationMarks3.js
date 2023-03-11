/*Remove all exclamation marks from sentence except at the end.*/

function remove(str){
  str = Array.from(str)
  str.forEach((a,x) => {
    console.log(a)
    if(a == '!'){
      str.splice(x,1)
    }else if(a == 'H'){
      
    }
  })
  return str.join('')
}

remove('Hi!') // 'Hi!'
remove('!Hi') // 'Hi'
remove('Hi!!!') // 'Hi!!!'

//INCOMPLETE