/*Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order 

var sortArray = function(value) {
  return value.split('').sort((c, p) => c / p ).join('');
}*/

var sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('');
}

sortArray('54321') // '12345'