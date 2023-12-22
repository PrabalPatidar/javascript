//  Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedaIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference  (Non Primitive)

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "prabal",
    age: 21,
}
 
const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ****************************************************************

// Stack (Primitive) , Heap (Non - Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "prabal@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// stack = primitive = number,boolean === copy did not change in original content change in copy
// Heap = reference == actual changes in original content