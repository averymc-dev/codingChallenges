//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
const createPhoneNumber = (numbers) => {
  const firstSet = numbers.splice(0,3).join('')
  const secondSet = numbers.splice(0,3).join('')
  const lastSet = numbers.splice(0,4).join('')
  return `(${firstSet}) ${secondSet}-${lastSet}`
}