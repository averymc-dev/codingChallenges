/*Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.*/

function combat(health, damage){
  health = health - damage
  if (health >= 0) {
    return health
  } else if (health < 0){
    return 0
  } else { return 'Health cannot go below 0' }
}

combat(100, 5) // 95
combat(20, 30) //0, "Health cannot go below 0"

/*TOP SOLUTION
function combat(health, damage) {
	return health < damage ? 0 : health - damage
}*/