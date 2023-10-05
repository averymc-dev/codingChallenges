/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).*/

const defineSuit = card => {
  card =  card.split('')
  suit = card[card.length-1]
  switch (suit) {
    case '♠':
      return 'spades';
      break;
    case '♣':
      return 'clubs';
      break;
    case '♦':
      return 'diamonds';
      break;
    case '♥':
      return 'hearts';
      break;
  }
}

defineSuit('Q♠') // 'spades'
defineSuit('10♥') // 'hearts'

/*TOP SOLUTION
function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}
*/