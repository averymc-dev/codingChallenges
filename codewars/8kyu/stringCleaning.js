/*
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

function stringClean(str) {
  str=str.split('')
  const num = '1234567890'.split('')
  for(let i=0; i<str.length; i++){
    for(let j=0; j<num.length; j++){
      if(str[i] === num[j]){
        str.splice(i, 1)
      }
    }
  }
  return str.join('')
}

stringClean('My "messy" data issues! Will they ever, ever be so0lved?')
stringClean("! !")
stringClean("123456789")
stringClean("(E3at m2e2!!)")

// INCOMPLETE 2/2/2023