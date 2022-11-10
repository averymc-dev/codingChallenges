/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth){
  let result = []
  const sa = (2 * (width * height)) + (2 * (width * depth)) + (2 * (height * depth))
  const vol = width * height * depth
  result.push(sa, vol)
  return result
}

getSize(4, 2, 6)
getSize(10, 10, 10)