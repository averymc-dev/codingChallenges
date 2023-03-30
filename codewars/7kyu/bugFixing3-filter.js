/*Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string. 

var FilterNumbers = function(str) {
  return str.split('').filter(c => !parseInt(c)).join('');
}
*/

var FilterNumbers = function(str) {
  return str.split('').filter(c => c != Number(c)).join('');
}

FilterNumbers("test123") // 'test'
FilterNumbers("test000") // 'test'

/*TOP SOLUTION
var FilterNumbers = function(str) {
  return str.split('').filter(c => isNaN(c)).join('');
}*/