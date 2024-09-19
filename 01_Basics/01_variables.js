const accountID = 124455;
let accountEmail = "shruti@gmail.com"
var accountPassword = "12345"
accountCity = "Mussori"

// account =2  //not allowed
// the major difference between var and let keyword in javaScript is that var does not comply with scope related theories, and let does.

accountEmail = "sh@sh.com"
accountPassword = "21212121"
accountCity = "Pune"
let accountState ; //if we do not define a value it comes as 'undefined' in JS

/*
Prefer not to use var keyword
because it does not comply with block scope and variable scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])