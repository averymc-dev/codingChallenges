/*Your task is to check if the gunners are loaded and ready, if they are: Fire!

If they aren't ready: Shiver me timbers!

Your gunners for each test case are 2, 3 or 4.

When you check if they are ready their answers are in a dictionary and will either be: aye or nay

Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!*/

let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

const cannonsReady = (gunners) => {
  let gunner = 0
  let ayes = 0
  for(let val in gunners){
    gunner++
    if(gunners[val] == 'aye'){
      ayes++
    }
  }
  if(ayes == gunner){ return 'Fire!' }
  else { return 'Shiver me timbers!' }
}

cannonsReady(a) // 'Fire!'
cannonsReady(b) // 'Shiver me timbers!'

/*TOP SOLUTION
const cannonsReady = (gunners) => {
  return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
}*/