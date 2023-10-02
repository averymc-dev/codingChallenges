/*Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc" */

const tripleTrouble = (one, two, three) => {
  let result = []
  for(let i=0; i<one.length; i++ ){
    result.push(one[i], two[i], three[i])
  }
  return result.join('')
}

tripleTrouble('aa', 'bb', 'cc') // 'abcabc'

/*TOP SOLUTION
function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}*/