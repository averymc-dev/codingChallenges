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

getSize(4, 2, 6) // [88,48]
getSize(10, 10, 10) // [600,1000]

// PART 2 - THE RETURNALIST
const getSize = (wid, hgt, dpt) => {
  let ans = [];
  const surf = (2*(wid*hgt)) + (2*(wid*dpt)) + (2*(hgt*dpt));
  const volume = wid*hgt*dpt;
  ans.push(surf, volume);
  return ans;
}