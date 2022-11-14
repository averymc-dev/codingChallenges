// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// Given code
// function howManyDalmations(numer :
  
//   var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
//   var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]

// return respond

// Fixed code

function howManyDalmatians(num) {
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]
  return num <= 10 ? dogs[0] : num <= 50 ? dogs[1] : num == 101 ? dogs[3] : dogs[2]
}

console.log(howManyDalmatians(26), 'More than a handful!')
console.log(howManyDalmatians(8), 'Hardly any')
console.log(howManyDalmatians(80), "Woah that's a lot of dogs!")