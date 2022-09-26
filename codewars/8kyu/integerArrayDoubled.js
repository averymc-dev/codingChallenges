// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map(e => e * 2)
}

maps([2,2,2])

// Second attempt (2/11/2023)
const doubles = x => x.map(e => e * 2)