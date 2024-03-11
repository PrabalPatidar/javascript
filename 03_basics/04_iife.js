// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named ^ IIFE
    console.log(`DB CONNECTED`);
})();

// IIFE means jo function immediately execute ho jaye  ==> global scope ke pollution se problem hoti hai kai baar
// tao us global scope ke jo variable hai ya jo bhi waha declaration hai ya jo bhi vaha pollution hai usko hatane ke liye IIFE ka use kiya hai
//  () ()         // 1st () means function defination  2nd () is execution of function

( (name) => {
    // ^ unnamed IIFE or parameter passed iife
     console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

