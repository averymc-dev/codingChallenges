/*Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.*/

const twoDecimalPlaces = n => +n.toFixed(2)

twoDecimalPlaces(4.659725356) // 4.66
twoDecimalPlaces(173735326.3783732637948948) // 173735326.38
twoDecimalPlaces(4.653725356) // 4.65

/*TOP SOLLUTION
const twoDecimalPlaces = n =>  Number(n.toFixed(2))
*/