/*Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.*/

function aspectRatio(x,y){
  return [Math.ceil(y*(16/9)), y] 
}

aspectRatio(640, 480) // [854,480]
aspectRatio(1727, 1876) // [3336, 1876]