/*At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

const differenceInAges = ages => {
  let result = []
  ages = ages.sort((a,b) => a - b)
  result.push(ages[0], ages[ages.length - 1])
  result.push(result[1] - result[0])
  return result
}

differenceInAges([82, 15, 6, 38, 35]) // [6, 82, 76]
differenceInAges([57, 99, 14, 32]) // [14, 99, 85]

/*TOP SOLUTION
function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}
*/