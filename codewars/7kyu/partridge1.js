/*Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad

If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!*/

function part(x) {
  let terms = [ 'Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad' ]
  let str1 = `Mine's a Pint`
  const str2 = `Lynn, I've pierced my foot on a spike!!`
  let count = 0
  for(let i=0; i<terms.length; i++){
    for(let j=0; j<x.length; j++){
      if(x[j] == terms[i]){
        str1 = str1 + '!'
        count++
      }
    }
  }
  if(count > 0){
    return str1
  } else { return str2 }
}

part(['Grouse', 'Partridge', 'Pheasant']) // 'Mine\'s a Pint!'
part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']) // 'Mine\'s a Pint!!!!!!!!')

/*TOP SOLUTION
function part(x){
  let arr = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
  let count = x.filter(item => arr.includes(item)).length
  return (count > 0) ? 'Mine\'s a Pint!' + '!'.repeat(count-1) : 'Lynn, I\'ve pierced my foot on a spike!!'
}*/