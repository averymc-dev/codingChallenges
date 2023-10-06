/*Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.*/  

const logs = (x, a, b) => {
  return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x)
}

logs(10, 2, 3) // 0.7781512503836435
logs(5, 2, 3) // 1.1132827525593785
logs(1000, 2, 3) // 0.25938375012788123

/*TOP SOLUTION
function logs(x , a, b){
return (Math.log(a*b) / Math.log(x));
}*/