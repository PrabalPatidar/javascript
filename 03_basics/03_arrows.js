const user = {
    username: "hitesh",            // this means current context ko refer karta hai 
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);        // jab aap node environment ke ander hai to aapka this jo hai wo refer kar rah hai kisko EMPTY SET ko kyoki abhi global ke ander koi context hi nhi hai
                          // browser ke ander jo global object hai wo hai window object

/*
function chai(){       
    let username = "hitesh"          
    console.log(this.username);     //  console.log(this.username);    ye jo context hai ye actually object ke ander hi kaam kar rha hai aese function ke ander aake this use nhi kar pa rha hu
                                    // jab aap kisi function ke ander this ko print kartre hai node environment ke ander       
                                    // tao aapke pass global value bhi aati hai , micro task structured clone, bahut sare
}                                   // performance valuation ideal time or fetch kya hai

// chai()
*/

// const chai = function () {
//     let username = "hitesh"             // output = undefined
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"          // console.log(this.username);  >>> output = undefined      
    console.log(this);               // console.log(this);   >>> output = {}
}

// chai()

// ******************* pure arrow function ********************************

// ARROW FUNCTION      () => {}

// const addTwo = (num1, num2) => {          // explicit return
//     return num1 + num2                    // basic arrow function
// }                                         // {} curely braces me likha to return use karna padega

// const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 )           // implicit return // agar () paranthesis use kiya to return use nhi karna hai    

// const addTwo = (num1, num2) => {username: "hitesh"}      // output = undefined  because kyo aai kyoki aap is tarah se object rerturn nhi kar sakte ho
const addTwo = (num1, num2) => ({username: "hitesh"})     // output = { username: 'hitesh' }   -->  // obj return karne ke liye usko paranthesis() me wrap karna hi padega      
console.log(addTwo(3, 4));


/* 

const myArray = [2, 5, 3, 7, 8]

myArray.forEach(function () {})
myArray.forEach(() => {})
myArray.forEach(() => ())
*/