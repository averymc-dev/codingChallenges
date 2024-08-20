/*Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  return
  {
    name: 'Max Headroom'
  }
}*/

function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

getMax1()
getMax2()

/*TOP SOLUTION
function getMax1()
{
  var max = {name: 'Max Headroom'}
  return max;
}

function getMax2()
{
// Have your return object on same line
return {name: 'Max Headroom'};
}*/