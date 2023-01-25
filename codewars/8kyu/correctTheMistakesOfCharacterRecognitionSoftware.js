/*Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/

function correct(str) {
  let result = []
  for(let i=0; i<str.length; i++){
    if(str[i] == '5'){
      result.push('S')
    }else if(str[i] == '0'){
      result.push('O')
    }else if(str[i] == '1'){
      result.push('I')
    }else { result.push(str[i])}
  }
  return result.join('')
}

correct("L0ND0N") // "LONDON"
correct("51NGAP0RE") // "SINGAPORE"