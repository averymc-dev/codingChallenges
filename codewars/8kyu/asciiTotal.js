/*You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.*/

function uniTotal (string) {
  let total = 0
  string.split('').forEach(a => total += a.charCodeAt())
  return total
}

uniTotal("Mary Had A Little Lamb") // 1873

/*TOP SOLUTION
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);*/