/*A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example:

yearDays(2000) returns "2000 has 366 days"

There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.
*/

function yearDays(year){
  let days = 365
  if(year % 4 == 0 && year % 100 !== 0){
    return `${year} has ${days + 1} days`
  }else if(year % 100 == 0 && year % 400 == 0){
    return `${year} has ${days + 1} days`
  }else { return `${year} has ${days} days` } 
}

console.log(yearDays(0), '0 has 366 days')
console.log(yearDays(-64), '-64 has 366 days')
console.log(yearDays(2016), '2016 has 366 days')
console.log(yearDays(1974), '1974 has 365 days')
console.log(yearDays(1000), '1000 has 365 days')

/*TOP SOLUTION
function yearDays(year) {
  return year + ' has ' + (!(year % 100) && year % 400 || year % 4 ? '365' : '366') + ' days';
}*/