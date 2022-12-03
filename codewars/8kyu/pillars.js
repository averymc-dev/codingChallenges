/*There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

    number of pillars (≥ 1);
    distance between pillars (10 - 30 meters);
    width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).*/

const pillars = (numPill, dist, width) => {
  if(numPill == 1){
    return 0
  }
  let lengthOfPills = numPill * width
  let lengthOfBetween = (numPill - 1) * (dist * 100)
  let result = lengthOfPills + lengthOfBetween - (width * 2)
  return result
}

console.log(pillars(1, 10, 10), 0)
console.log(pillars(2, 20, 25), 2000)
console.log(pillars(11, 15, 30) , 15270)

/*TOP SOLUTION
function pillars(num_pill, dist, width) {
  // your code here
  return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
}*/