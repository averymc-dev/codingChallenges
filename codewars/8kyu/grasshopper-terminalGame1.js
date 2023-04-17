/*In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute 	value
name: 	user argument or 'Hero'
position: 	'00'
health: 	100
damage: 	5
experience: 	0*/

function Hero (name) { // This is a constructor function, to make 'Heroes'
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

let myHero = new Hero('avery')
console.log(myHero)