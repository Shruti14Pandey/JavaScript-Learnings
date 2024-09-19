// console.log(2>1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

console.log("2" > 1) //output= true (it gets converted by jS itself)
console.log("02" > 1) //output- true

console.log(null > 0) //output - false
console.log(null == 0) //output - false
console.log(null >= 0) //output - true

//The reason is that that an equality check == and comparison <,>,>=,<= work differently.
//comparisons convert null to a number,treating it as 0
//That is why , (null)>=0 is true and (null)>0 is false

//=== is termed as strict check, it not only checks for the value but also the datatype