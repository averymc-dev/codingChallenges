/*You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).*/

const array = str => {
  let newArr = []
  str = str.split(',')
  if(str.length <= 2){
    return null
  }
  for(let i=0; i<str.length-1; i++){
    console.log(i)
    if(i == 0 || i == str.length - 1){
      
    }else{
      newArr.push(str[i])
    }
  }
  return String(newArr.join(' '))
}

console.log(array(''), null)
console.log(array('1'), null)
console.log(array('A1,B2'), null)
console.log(array('1,2,3'), '2')
console.log(array('1,2,3,4'), '2 3')

/*TOP CODEWARS SOLUTION
function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}*/