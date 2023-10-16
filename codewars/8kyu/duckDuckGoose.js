// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

class Player {
  constructor(name) {
  	this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

const duckDuckGoose = (players, goose) => {
  const num = (goose -1) % players.length
  return players[num].name
}


duckDuckGoose(players, 1) // "a"
duckDuckGoose(players, 10) // "z"
duckDuckGoose(players, 28) // "g"

/*TOP SOLUTION
function duckDuckGoose(players, goose) {
  
  return players[(goose-1)%players.length].name
}
*/