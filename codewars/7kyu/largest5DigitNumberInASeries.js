/*Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits. */

function solution(digits){
  let sums = []
  digits = Array.from(digits, Number)
  for(let i=0; i<digits.length; i++){
    const fives = digits.slice(i, i+5)
    sums.push(+fives.join(''))
  }
  return sums.reduce((a, c) => Math.max(a, c), -Infinity)
}

solution('1234567898765') // 98765

/*TOP SOLUTION
function solution(digits){
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}*/