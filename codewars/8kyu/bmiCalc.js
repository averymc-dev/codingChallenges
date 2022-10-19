// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const sum = weight / Math.pow(height,2)
    if(sum<=18.5){
      return 'Underweight'
    }else if(sum<=25){
      return 'Normal'
    }else if(sum<=30){
      return 'Overweight'
    }else{return 'Obese'}
  }

// Refactoring this solution would be futile. You could change the function declaration to an expression, and make the if else chain a complicated mess of a ternary, but that would be only for the sake of changing it. Nevermind 3/2/2023