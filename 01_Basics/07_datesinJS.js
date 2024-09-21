// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.

console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

let createDate = new Date(23 , 0 , 2023); //remember in javascript month number starts from 0 index
console.log(createDate.toDateString());

let mycreatedDate = new Date("01-14-2023"); //output: 01/14/2023, 12:00:00A.M.

let myTimeStamp = Date.now(); //this will give the timestamp (as in a lap time in races)

console.log(Math.floor(DAte.now()/1000)); //this will convert it into seconds from milisec
