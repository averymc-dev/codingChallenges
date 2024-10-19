/*Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1

*/

function unluckyDays(year){
  const friday13 = 5
  let counter = 0
  for(let i=0; i<12; i++){
    const date = new Date(year, i, 13)
    if(date.getDay() == friday13){
      counter++
    }
  }
  return counter
}

unluckyDays(2819) // 2

/*TOP SOLUTION
function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}*/