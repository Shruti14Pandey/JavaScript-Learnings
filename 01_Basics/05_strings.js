const name = "Shruti"
const countRepo = 50

console.log(name + countRepo + " value") //output- Shruti50 value


// This method of writing has been outdated
// nowadays, we use nack-ticks , i.e `` - preferably termed as string interpolation

// to inject our way we use ${} , modern way of writing

console.log(`Hello my name is ${name} and the number of repositories that have is ${countRepo}`)

const gameName = new String('hiteshhc') //another way to declare string, although it is same as before
//these strings when run in the console will appear as key value pairs

console.log(gameName[0]); //h
console.log(gameName.__proto__); //{}
console.log(gameName.toUpperCase); //HITESHHC

//Remember one thing, that here the original value is not changing, because string is a primitive datatype and primitive datatypes are called by value that is, copy is sent not the original parameter

const newString = gameName.substring(0,4) // return hite . it does not obey the concept of negative values though. if you by chance put any negative value, it will straight away ignore it and the results will be the same
const anotherString = gameName.slice(-8,4) //it is similar but just works with negatives values as well, 
//trim()
//replace('t' , 'i')
//gameName.includes('hitesh') - this gives true
//gameName.split(separator) - returns an array