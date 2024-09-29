/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.*/

function findOutlier(arr){
  let [evenArr, oddArr] = [[], []]
  arr.forEach(x => {
    return x % 2 == 0 ? evenArr.push(x) : oddArr.push(x)
  })
  if(evenArr.length > 0  && oddArr.length > 0){
    return evenArr.length > oddArr.length ? oddArr[0] : evenArr[0]
  }
}

findOutlier([0, 1, 2]) // 1
findOutlier([1, 2, 3]) // 2
findOutlier([2,6,8,10,3]) // 3
findOutlier([0,0,3,0,0]) // 3
findOutlier([1,1,0,1,1]) // 0

/* TOP SOLUTION
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}*/