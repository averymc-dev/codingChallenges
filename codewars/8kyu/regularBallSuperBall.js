/*Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."*/

var Ball = function(ballType) {
  this.ballType = !ballType ? 'regular' : ballType
};

new Ball().ballType // "regular"
new Ball("super").ballType // "super"

/*TOP SOLUTION
var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};*/