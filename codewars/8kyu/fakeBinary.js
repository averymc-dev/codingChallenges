// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    return x.split('').map((x) => x<5 ? 0 : 1).join('')
}

/// REFACTORED SOLUTION 2/20/2023
const falseBin = x => x.split('').map((x) => x < 5 ? 0 : 1).join('')

// TESTS
console.log(falseBin('1546'), '0101')
console.log(falseBin('123'), '000')
console.log(falseBin('45678'), '01111')