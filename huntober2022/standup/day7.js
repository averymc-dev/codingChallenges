/*
Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .
*/

function nthSmallest(arr, ind){
  return arr.sort((a,b) => a - b)[ind]
}

nthSmallest([3,1,2,12,11] ,2)