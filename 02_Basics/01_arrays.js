//Arrays
// Arrays of javaScript is resizable
// Javascript array copy operations , create shallow copies rather than deep , i.e., the original thing gets change

const myArr = [0,1,2,3,4,5]
const myHeros = ["ironman" , "thor" , "captain america"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0])

//Array methods

console.log(myArr.push(6))//adds
myArr.pop() //removes last element , no parameters needed

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
//the return will be the same just the typeof will be string

// major difference between Array.slice() and Array.splice()
