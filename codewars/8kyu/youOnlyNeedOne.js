//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either.
//Return true if the array contains the value, false if not.
const checkValue = (a,x) => a.includes(x)

checkValue([0,1,2,3,4], 3) // TRUE
checkValue(['a','x2',3,'yyy'], 'yyy') // TRUE
checkValue([0,'o1','abc','tt',69], 68) // FALSE