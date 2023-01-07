/*Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
*/

const colorOf = (r,g,b) => {
  let rgb = [r.toString(16), g.toString(16), b.toString(16)]
  for(let i=0; i<rgb.length; i++){
    if(rgb[i].length < 2){
      rgb[i] = '0' + rgb[i]
    }
  }
  return `#${rgb.join('')}`
}

colorOf(255,0,0) // "#ff0000"
colorOf(0,111,0) // "#006f00"
colorOf(1, 2 ,3) // "#010203"

/*TOP SOLUTION
function colorOf(r,g,b)
{
   return "#" + toHex(r)+ toHex(g)+ toHex(b);  
}

function toHex(n)
{
  var result = n.toString(16);
  return result.length == 1 ? "0" + result : result;  
}*/