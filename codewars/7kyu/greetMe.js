/*Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

const greet = (name) => {
  name = name.toLowerCase();
  return `Hello ${name.charAt(0).toUpperCase()
  + name.slice(1)}!`
}

greet('riley') // 'Hello Riley!'
greet('BILLY')  // 'Hello Billy!'
greet('EJkFQl') //  'Hello Ejkfql!'

/*TOP SOLUTION
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};*/