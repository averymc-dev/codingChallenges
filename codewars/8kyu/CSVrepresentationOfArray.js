/*Create a function that returns the CSV representation of a two-dimensional numeric array.

Array's length > 2.

Note: you shouldn't escape the \n, it should work as a new line.*/

function toCsvText(arr){
  return arr.join('\n')
}

toCsvText([[ 0, 1, 2, 3, 45 ],[ 10,11,12,13,14 ],[ 20,21,22,23,24 ],[ 30,31,32,33,34 ]]) // '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34')