/*Complete the function which returns the weekday according to the input number:

    1 returns "Sunday"
    2 returns "Monday"
    3 returns "Tuesday"
    4 returns "Wednesday"
    5 returns "Thursday"
    6 returns "Friday"
    7 returns "Saturday"
    Otherwise returns "Wrong, please enter a number between 1 and 7"*/

    const whatday = num => {
      const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      num = num-1
      if(num <0 || num >6 ){
        return 'Wrong, please enter a number between 1 and 7'
      }else { return day[num] }
    }
    
    whatday(6) //'Friday'
    whatday(0) //'Wrong...'
    whatday(8) //'Wrong...'
    whatday(1) //'Sunday'
    whatday(20) //'Wrong...'

/*TOP SOLUTION
function whatday(num) { 
  switch(num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}*/