/*You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!*/

class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  isWorthIt(){
    let units = this.draft - (this.crew * 1.5)
    return units > 20
  }
}

let emptyShip = new Ship(0,0)
console.log(emptyShip.isWorthIt()) // false

let aWorthyShip = new Ship(100,20)
console.log(aWorthyShip.isWorthIt()) // true

/*TOP SOLUTION
Ship.prototype.isWorthIt = function(){
  return this.draft-(this.crew*1.5) > 20;
  }*/