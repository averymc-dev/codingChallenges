/*Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

const mygcd = (x,y) => y === 0 ? x : mygcd(y, x % y)

/*TEST CASES*/
mygcd(30, 12) // 6
mygcd(36, 12) // 12
mygcd( 8,  9) // 1
mygcd( 1,  1) // 1