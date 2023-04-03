/*In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/

function periodIsLate(last, today, cycleLength) {
  const lastDay = last.getTime() / (1000 * 3600 * 24)
  const toToday = today.getTime() / (1000 * 3600 * 24)
  return (toToday - lastDay) > cycleLength
}

periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35) // false
periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28) // true
periodIsLate(new Date(2016,07,12), new Date(2016,08,10), 28) // true

/*TOP SOLUTION
function periodIsLate(last, today, cycleLength)
{
  return (today-last)/86400000>cycleLength
}*/