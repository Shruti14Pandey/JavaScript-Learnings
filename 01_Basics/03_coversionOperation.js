let score = "33";

console.log(typeof score);
console.log(typeof (score)); //we can pass this function both ways

let valueInNumber = Number(score);  //CONVERSION 
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" on conversion to number => 33
// "33abc" on conversion => NaN (Not a Number)
// true =>1 , false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

// 1 => true , 0 => false
// "" (empty space) => false
// "hitesh" => true



/*  OPERATIONS  */

// console.log(2+2) add
// console.log(2-2) subtract
// console.log(2*2) multiply
// console.log(2/2) divide
// console.log(2**2) power
// console.log(2%2) reminder

let str1 = "hello"
let str2 = "  hitesh"
let str3 = str1+str2
// console.log(str3) hello hitesh

console.log("1" + 2)     // o/p- 12
console.log(1 + "2")     // o/p- 12
console.log("1" + 2 + 2) // o/p- 122
console.log(1 + 2 + "2") // o/p- 32

console.log(true) //output- true
console.log(+true) //output- 1
console.log("") //output- 0




