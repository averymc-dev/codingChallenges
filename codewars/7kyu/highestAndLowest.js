//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    const sortNum = numbers.split(' ').map(Number).sort((a,b) => {
        if (a > b) return 1; 
             if (a == b) return 0; 
             if (a < b) return -1;
      })
      const result = sortNum.filter((x,y) => y == [0] || y == [sortNum.length - 1]).sort((a,b) => {
        if (a > b) return -1; 
             if (a == b) return 0; 
             if (a < b) return 1;
      })
      if(result[1] == undefined){
        result[1] = result[0]
      }
      return `${result[0]} ${result[1]}`
  }

// REFACTOR
const highAndLowNums = nums => {
  nums = nums.split(' ').map(Number).sort((a,b) => {
    return a - b
  })
  console.log(nums)
  return `${nums[nums.length - 1]} ${nums[0]}`
}

highAndLowNums('2 4 6 7 1') // '7 1'
highAndLowNums('2 4 6 7 44') // '44 2'
highAndLowNums('2 4 6 -7 1') // '6 -7'
highAndLowNums('2 -4 6 7 44') // '44 -4'