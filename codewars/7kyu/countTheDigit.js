function nbDig(int, dig){
  let numResult = ''  // initializes string where numbers will reside
  for(let i=0; i<=int; i++){ // squares every number from 0 to the given integer
    numResult += i ** 2    
  }
  return numResult.split(dig).length - 1 // gives number of times digit appears by splitting the string at that digit, then getting the length and subtract 1 to make up for zero-index
}

nbDig(10, 1) // 4
nbDig(25, 1) // 11
nbDig(5750, 0) // 4700

/*TOP SOLUTION
function nbDig(n, d) {
var res=0;
    for (var g=0;g<=n;g++){
      var square=(g*g+"").split("");
      square.forEach((s)=>s==d?res++:null)
    }return res;
}*/