/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  

As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

function eachCons(arr, num){
  const result = [];
  for(let i=0; i<arr.length; i++){
    let smallArr = []
    for(let j=0; j<num; j++){
      let index = i + j;
      if(index >= arr.length) return result;
      smallArr.push(arr[index]);
    }
    result.push(smallArr);
  }
  return result
}

eachCons([3,5,8,13], 1) // [[3], [5], [8], [13]]
eachCons([3,5,8,13], 2) // [[3,5], [5,8], [8,13]]

/*TOP SOLUTION
function eachCons(array, n) {
  let res = [];
  
  for(let i = 0; i < array.length; i++){
    res.push(array.slice(i,i + n));
  }
  
	return res.filter(e => e.length === n);
}
*/