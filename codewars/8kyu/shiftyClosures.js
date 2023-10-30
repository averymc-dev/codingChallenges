/*Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
*/

var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
var othername = 'Ben';
var greet_ben = function() {
  return "Hello, " + othername + '!';
};

greet_abe()
greet_ben()

/*TOP SOLUTION
var name;
function greet_abe() {
  name = 'Abe';
  return "Hello, " + name + '!';
};


function greet_ben() {
  name = 'Ben'; 
  return "Hello, " + name + '!';
};*/