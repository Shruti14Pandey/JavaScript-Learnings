// singleton object-  //const tinderUser = new Object()

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name : "Shruti",
    id : 109,
    [mySym] : "key1",
    location : "Jaipur",
    email : "shruti@google.com",
    isLogedin : false,
    LoginDays : ["Monday" , "Tuesday"]
}

console.log(jsUser.email); //Output:shruti@google.com
console.log(jsUser[email]);//Output:shruti@google.com
console.log(jsUser[mySym]); //output:key1

jsUser.email = "shruti1234@gmail.com"
Object.freeze(jsUser) //this will freeze the object, that is, won't allow further changes

jsUser.greeting = function(){
    console.log("Hello jsUser");
    
}

jsUser.greeting2 = function(){
    console.log(`Hello jsUser, ${this.name}`);
    
}
// Remember to un-freeze before manipulating the object

console.log(jsUser.greeting); // this returns- function([anonymous])
console.log(jsUser.greeting()); // this returns- Hello jsUser
console.log(jsUser.greeting2()); // this returns- Hello jsUser, Shruti


const obj1 = {1:'a' , 2:'b'}
const obj2 = {3:'c' , 4:'d'}

//to combine them
// const targetObject = Object.assign(target,source)
const obj3 = Object.assign({},obj1,obj2) //Output:{1:'a' , 2:'b , 3:'c' , 4:'d'} - this method returns a modified target object
//inorder to join we can also use spread 
const obj4 = {...obj1, ...obj2} //it will give the same answer. USE THIS!!

// Object.keys(jsUser)
// Object.values(jsUser)
//Object.entries(jsUser)
// jsUser.hasOwnProperty('email')-gives boolean answer


const course = {
    courseName:"js in hindi",
    coursePrice: 999,
    courseInstructor:"hitesh sir"
}
//Inorder to destructure the object

// console.log(course.courseInstructor); -this will print 'hitesh'

// However, we can also write it like
const {courseInstructor: instructor} = course 
// console.log(instructor); - this will give 'hitesh'





