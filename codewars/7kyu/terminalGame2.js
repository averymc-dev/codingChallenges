/*Create a move method for your hero to move through the level.

Adjust the hero's position by changing the position attribute. The level is a grid with the following values:
00 	01 	02 	03 	04
10 	11 	12 	13 	14
20 	21 	22 	23 	24
30 	31 	32 	33 	34
40 	41 	42 	43 	44

The dir argument will be a string

up
down
left
right

If the position is not inside the level grid the method should throw an error and not move the hero*/

function Hero (name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

Hero.prototype.move = function (dir) {
  console.log(dir)
  // const grid = [['00','10','20','30','40'], ['01','11','21','31','41'],['02','12','22','32','42'],['03','13','23','33','43'],['04','14','24','34','44']];
  switch(dir){
    case 'down':
      this.position = String(+this.position + +'10')
      break;
    case 'right':
      this.position = String(+this.position + +'01')
      break;
    case 'up':
      this.position = String(+this.position - +'10')
      break;
    case 'left':
      this.position = String(+this.position - +'01')
      break;
  }
  
}

var testHero = new Hero()
testHero.position // '00'
testHero.move('down')
testHero.position // '10'
testHero.move('right')
testHero.position // '11'
testHero.move('up')
testHero.position // '01'
testHero.move('left')
testHero.position // '00'

//INCOMPLETE