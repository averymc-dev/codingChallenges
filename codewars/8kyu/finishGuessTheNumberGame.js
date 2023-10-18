/*Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

    If the user tries to guess more than the limit, the function should throw an error.
    If the user guess is right it should return true.
    If the user guess is wrong it should return false and lose a life.
*/

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    
    if(n == this.number){
      return true
    }if( n !== this.number){
      this.lives -= 1
      return false;
    }
  }
}

let guesser = new Guesser(10, 2);
    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);

//INCORRECT
/*CORRECT SOLUTION:
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (!this.lives) throw Error
    this.lives--
    return n === this.number
  }
}*/