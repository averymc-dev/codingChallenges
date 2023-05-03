/*This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(str){
  let result = []
  for(let i=0; i<str.length; i++){
    result.push(str[i].toLowerCase().repeat(i+1))
  }
  result = result.join(' ')
  return result.split(' ')
    .map((x) => x[0].toUpperCase() + x.substring(1)
    )
    .join('-')
}

accum("abcd") // "A-Bb-Ccc-Dddd"
accum("ZpglnRxqenU") // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

/*TOP SOLUTION
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}*/