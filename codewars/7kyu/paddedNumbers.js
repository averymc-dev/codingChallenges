/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5); // should return "Value is 00005"
*/

const solution = num => `Value is ${String(num).padStart(5, 0)}`

solution(5) // "Value is 00005"
solution(1204) // "Value is 01204"