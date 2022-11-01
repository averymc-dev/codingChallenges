/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/
function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    Array.from(str).forEach(x => {
        if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'){
            vowelsCount++;
        }
    });
    return vowelsCount;
  }

// REFACTORED
const getCount = str => {
    let count = 0
    Array.from(str).forEach(x => {
      if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'){
        count++;
      }
    })
    return count
}

getCount("abracadabra") // 5
getCount("pear tree") // 4