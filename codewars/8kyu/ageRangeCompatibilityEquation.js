/*Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

(age/2)+7 = min, (age - 7)*2 = max

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age

You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]*/

const datingRange = age => {
  let min, max
  if(age <= 14){
    min = Math.floor(age - 0.10 * age)
    max = Math.floor(age + 0.10 * age)
    return `${min}-${max}`
  }
  min = Math.floor((age / 2) + 7)
  max = Math.floor((age - 7) * 2)
  return `${min}-${max}`
}

datingRange(17) // "15-20"
datingRange(35) // "24-56"
datingRange(10) // "9-11"

/*TOP SOLUTION
function datingRange(age){
  return `${min(age)}-${max(age)}`;
  
  function min(age) {
    return Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
  }
  
  function max(age) {
    return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
  }
}*/