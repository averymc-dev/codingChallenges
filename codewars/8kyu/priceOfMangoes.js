// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
const mango = (quan, price) => {
  let freeMangoes = 0
  for(let i=1; i<=quan; i++){
    if(i % 3 == 0){
      freeMangoes++
    }
  }
  return (quan - freeMangoes) * price
}

console.log(mango(2, 3), 6)
console.log(mango(3, 3), 6)
console.log(mango(5, 3), 12)
console.log(mango(9, 5), 30)

/*TOP CODEWARS SOLUTION
function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}*/