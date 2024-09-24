// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //do not forget the semicolon

// At times there arises problem in context to global scopes, inorder to skip such problems we use iife 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
