const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => { //EXPLICIT RETURN
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //arrow functions used without paranthesis and return is termed as IMPLICIT RETURN

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) //inorder to return object , you need to wrap it in paranthesis else it will give undefined


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// The global object in browser (console.log(this))is termed as Window. However, in nodeJS it is {}

// if this keyword is used in a function without an object , then it will return undefined