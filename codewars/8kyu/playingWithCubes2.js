/*Hey Codewarrior!

You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

The constructor taking no arguments should assign 0 to Cube's Side property.

This Cube class needs help
Implement the constructor so that it can take an integer for the side or no args

class Cube {
  
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}
*/

class Cube {
  
  constructor(int=0) {
    this.side = Math.abs(int)
  }
  
  getSide(n) {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

// let cube = new Cube(12)
let cube = new Cube()
console.log(cube.getSide())

/*TOP SOLUTION
class Cube {
  constructor(side) {
    this.setSide(side)
  }

  getSide() {
    return this.side
  }
  
  setSide(side = 0) {
    this.side = Math.abs(side)
  }
}*/