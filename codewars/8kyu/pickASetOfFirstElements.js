/*Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []
*/

const first = (arr, n=1) => arr.slice(0,n)

const arr = ['a', 'b', 'c', 'd', 'e'];
first([...arr])
first([...arr], 2) //=> ['a', 'b']
first([...arr], 10) //=> ['a', 'b', 'c'];