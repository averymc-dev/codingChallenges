/*You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)*/

function myLanguages(results){
  let lang = []
  let sorted = Object.fromEntries(
    Object.entries(results).sort(([, a], [, b]) => a > b ? -1 : 1)
  )
  for(let x in sorted){
    if(sorted[x] >= 60){
      lang.push(x)
    }
  }
  return lang
}

myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}) // ["Ruby", "Python"]
myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}) // ["Dutch", "Greek", "Hindi"]

/*TOP SOLUTION
function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}*/