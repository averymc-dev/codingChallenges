/*In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!*/

const fuelPrice = (litres, pricePerLitre) => {
  let discount = 0
  pricePerLitre = +pricePerLitre.toFixed(2)
  if(litres >= 2){ discount = .05 }
  if(litres >= 4){ discount = .10 }
  if(litres >= 6){ discount = .15 }
  if(litres >= 8){ discount = .20 }
  if(litres >= 10){ discount = .25 }
  return +((litres * pricePerLitre) - (litres * discount)).toFixed(2)
}

fuelPrice(5, 1.23) // 5.65
fuelPrice(8, 2.5) // 18.40
fuelPrice(5, 5.6) // 27.50

//INCORRECT

/*CORRECT SOLUTION:
function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i +=2) { //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;;
}*/