/*Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.*/

const sayHello = (name, city, state) => {
  name = name.join(' ')
  return `Hello, ${name}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))

/*TOP CODEWARS SOLUTION
function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}*/