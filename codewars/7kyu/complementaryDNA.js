/*In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).*/

function DNAStrand(dna) {
  let result = []
  dna.split('').map(x => {
    x == 'A' ? result.push('T') : x == 'T' ? result.push('A') : x == 'C' ? result.push('G') : x == 'G' ? result.push('C') : 0
  })
  return result.join('')
}

DNAStrand("ATTGC") // "TAACG"

/*TOP SOLUTION
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}*/