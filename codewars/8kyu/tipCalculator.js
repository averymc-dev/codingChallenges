/*Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

    Terrible: tip 0%
    Poor: tip 5%
    Good: tip 10%
    Great: tip 15%
    Excellent: tip 20%

The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

    "Rating not recognised" in Javascript, Python and Ruby...
    ...or null in Java
    ...or -1 in C#

Because you're a nice person, you always round up the tip, regardless of the service.
*/

const calculateTip = (amnt, rate) => {
  rate = rate.toLowerCase()
  if(rate == 'excellent'){
    return Math.ceil(amnt * .2)
  }else if(rate == 'great'){
    return Math.ceil(amnt * .15)
  }else if(rate == 'good'){
    return Math.ceil(amnt * .1)
  }else if(rate == 'poor'){
    return Math.ceil(amnt * .05)
  }else if(rate == 'terrible'){
    return Math.ceil(amnt * 0)
  } else { return 'Rating not recognised' }
}

calculateTip(20, "Excellent") // 4
calculateTip(26.95, "good") // 3

/*TOP SOLUTION
const TIPS = {
  "terrible": 0.0,
  "poor": 0.05,
  "good": 0.1,
  "great": 0.15,
  "excellent": 0.2
};

const calculateTip = (amount, rating) => {
  rating = rating.toLowerCase();
  
  return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
};
*/