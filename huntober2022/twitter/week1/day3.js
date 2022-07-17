// We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). example key characters -> 'A','_','K','E','Y','!'

function replaceSpace(str){
  let keyChar = ['A', '_', 'K', 'E', 'Y', '!']
  str = str.split('')
  for(let i=0; i<str.length; i++){
    for(let j=0; j<keyChar.length; j++){
      if(str[i] === keyChar[j]){
        str[i] = ' '
      }
    }
  }
  return str.join('')
}

replaceSpace('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters')