/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.
*/

function noBoringZeros(n){
  while(n % 10 === 0 && n !== 0){
    n = n/10
  }
  return n
}

noBoringZeros(1450)
noBoringZeros(96000)
noBoringZeros(1050)

// with assistance from https://dev.to/thepracticaldev/daily-challenge-195-no-zeroes-for-heroes-2mm4