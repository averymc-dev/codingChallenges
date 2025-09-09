/*Wilson primes satisfy the following condition. Let PPP represent a prime number.

Then,
(P−1)!+1P∗P\displaystyle\frac{(P-1)! + 1}{P * P}P∗P(P−1)!+1​

should give a whole number, where P!P!P! is the factorial of PPP.

Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.
*/

function amIWilson(p) {
  p = BigInt(p)
  return ((factorial(p - 1n)) + 1n) % (p * p) == 0n
}

function factorial(x){
  if(x <= 1n){
    return 1n
  }
  return x * factorial(x - 1n)
}

amIWilson(5) // true
amIWilson(9) // false
amIWilson(6) // false

/*TOP SOLUTION
function amIWilson(p) {
  p = BigInt(p);
  const fac = n => n ? n * fac(n-1n) : 1n;
  const d = (fac(p-1n) + 1n);
  return !(d % (p * p));
}*/