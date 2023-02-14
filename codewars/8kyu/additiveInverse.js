//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    return array.map(x => x*(-1));
}

// REFACTORED SOLUTION 2/14/2023
const getInversion = arr => arr.map(x => x*(-1));

getInversion([1,2,3]) // [-1,-2,-3]