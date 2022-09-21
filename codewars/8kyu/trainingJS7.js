/* 
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

n < 5 =	100
n >= 5 and n < 10 =	95
n >= 10 =	90

*/

function saleHotdogs(n){
  if(n<5){
    return n*100
  }else if(n>=10){
    return n*90
  }else{
    return n*95
  }
}

saleHotdogs(5)