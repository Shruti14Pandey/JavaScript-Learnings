const marvel_heroes = ["thor" , "ironman" , "spiderman"]
const dc_heroes = ["superman" , "flash" , "batman"]

console.log(marvel_heroes.push(dc_heroes)); //Output: ['thor' , 'ironman' , 'spiderman' ,  ['superman' , 'flash' , 'batman']]
// to get the desired array combination , we use concat() and spread operator

console.log([...marvel_heroes , ...dc_heroes]); //spread operator this will also result in combination of array
// Do read more

const another_array = [1,2,3,4,[5,6],7,[8,[9,6]]]
const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth


console.log(Array.isArray("hitesh")); //Output: false
console.log(Array.from("hitesh")); //Output: ['h','i','t','e','s','h']


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//Returns a new array from a set of elements.
// [100,200,300]


