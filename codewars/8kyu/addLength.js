// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space. 

function addLength(str) {
  str = str.split(' ')
  let count = 0
  let newArr = []
  str.forEach(element => {
    element = element.split('')
    element.push(` ${element.length}`)
    element = element.join('')
    newArr.push(element)
  });
  return newArr
}

console.log(addLength("apple ban"), ["apple 5", "ban 3"])
console.log(addLength("you will win"), ["you 3", "will 4", "win 3"])

//TOP CODEWARS SOLUTION
function addLength(str){
  return str.split(" ").map(s => `${s} ${s.length}`)
}