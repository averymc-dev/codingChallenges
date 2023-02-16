// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks){
    let sum = 0
    marks.forEach(x=>{
        sum += x
    })
    return Math.floor(sum / (marks.length))
}

// REFACTORED SOLUTION 2/16/2023
const averageGrade = scores => {
    let sum = 0
    scores.forEach(score => sum += score)
    return Math.floor (sum / scores.length)
}