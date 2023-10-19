/*Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

const today = new Date()

function isToday(today){
  return today.toLocaleDateString() == new Date().toLocaleDateString() 
}

isToday(today)