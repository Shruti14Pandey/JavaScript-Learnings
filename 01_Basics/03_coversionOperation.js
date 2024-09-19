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

