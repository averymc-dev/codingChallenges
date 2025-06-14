/*Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"
Examples

25 is an automorphic number, because 252=625 25^2 = 625 252=625 ends with 25, so return "Automorphic".
13 is not an automorphic number, because 132=169 13^2 = 169 132=169 does not end with 13, so return "Not!!".
76 is an automorphic number, because 762=5776 76^2 = 5776 762=5776 ends with 76, so return "Automorphic".
225 is not an automorphic number, because 2252=50625 225^2 = 50625 2252=50625 does not end with 225, so return "Not!!".
625 is an automorphic number, because 6252=390625 625^2 = 390625 6252=390625 ends with 625, so return "Automorphic".
1 is an automorphic number, because 12=1 1^2 = 1 12=1 ends with 1, so return "Automorphic".
6 is an automorphic number, because 62=36 6^2 = 36 62=36 ends with 6, so return "Automorphic".*/

function automorphic(num){
  let length = num.toString().split('').length
  let squared = +Math.pow(num, 2).toString().slice(-length)
  return num === squared ? "Automorphic" : "Not!!"
}

automorphic(25) // "Automorphic"
automorphic(13) // "Not!!"
automorphic(95) // "Not!!"
automorphic(6) // "Automorphic"

/*TOP SOLUTION
const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;*/