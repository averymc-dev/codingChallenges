// Please create a function that will fix a given string of this mistake before incalculable damage can be done!

function fixString(s){
  const problemObj = { // Declare object of all mistyped characters and their counterparts
    '0' : 'O', 'O' : '0',
    '1' : 'I', 'I' : '1',
    '2' : 'Z', 'Z' : '2',
    '3' : 'E', 'E' : '3',
    '4' : 'h', 'h' : '4',
    '5' : 'S', 'S' : '5',
    '6' : 'G', 'G' : '6',
    '7' : 'L', 'L' : '7',
    '8' : 'B', 'B' : '8',
    '9' : 'q', 'q' : '9'
  };
  return [...s].map(x => problemObj[x] ? problemObj[x] : x).join('') // Spreads string and maps the value of the key of problemObj[x] to the final string array, if there is no problemObj[x] ( as in the letter or number was not there), it will map x and move on to the next 
}

fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")