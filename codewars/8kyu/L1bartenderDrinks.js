/*Complete the function that receives as input a string, and produces outputs according to the following table:
Input 	Output
"Jabroni" 	"Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	"Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	"Your tax dollars"
"Rapper" 	"Cristal"
anything else 	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".*/

const getDrinkByProfession = param => {
  param = param.toLowerCase()
  let prof = ['jabroni', 'school counselor', 'programmer', 'bike gang member', 'politician', 'rapper']
  let drink = ['Patron Tequila', 'Anything with Alcohol', 'Hipster Craft Beer', 'Moonshine', 'Your tax dollars', 'Cristal']
  for(let i=0; i<prof.length; i++){
    if(prof[i] == param){
      return drink[i]
    }
  }
  return 'Beer'
}

console.log(getDrinkByProfession('jabrOni'), 'Patron Tequila')
console.log(getDrinkByProfession('poLiTiCian'), 'Your tax dollars')
console.log(getDrinkByProfession('rapper'), 'Cristal')
console.log(getDrinkByProfession('Pug'), 'Beer')

/*TOP SOLUTIONS:
function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return	"Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}

const drinks = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal"
}

const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"

function getDrinkByProfession(param){
  let map = new Map([
  		["jabroni", "Patron Tequila"],
  		["school counselor", "Anything with Alcohol"],
  		["programmer", "Hipster Craft Beer"],
  		["bike gang member", "Moonshine"],
  		["politician", "Your tax dollars"],
  		["rapper", "Cristal"]
  		]);
      
   let normal = param.toLowerCase();
   return map.has(normal) ? map.get(normal) : "Beer";
}*/