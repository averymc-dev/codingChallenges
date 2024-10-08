/*You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).*/

const billboard = (name, price = 30) => {
  let result = 0
  name = name.split('')
  for(let i=0; i<name.length; i++){
    result += price
  }
  return result
}

billboard("Jeong-Ho Aristotelis") //600
billboard("Abishai Charalampos") //570
billboard("Anani Fridumar") //420
billboard("Hadufuns John", 20) //260

