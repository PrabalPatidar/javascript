// function syntax  == function name () {...}

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName == reference  & sayMyName() == execute
//sayMyName()

// function addTwoNumbers(number1, number2){             // function defination banate hai uske ander jo bhi input lete hai to usse  Parameter bolte hai  function addTwoNumbers(number1, number2)  num1,num2 is parameter
//     console.log(number1 + number2);                   //  function call karate hai usse  Argument bolte hai  addTwoNumbers(3, null)   3, null is argument
// }

// const result = addTwoNumbers(3, 5)
// console.log("result:", result);           // undefined

// addTwoNumbers(3, 4)        // 7
// addTwoNumbers(3, "4")      // 34
// addTwoNumbers(3, "a")      // 3a
// addTwoNumbers(3, null)     // 3

function addTwoNumbers(number1, number2){
    // let result = number1 + number2                // return ke baad kuch bhi print nhi hoga par uske pehle ho jayega
    // return result
    return number1 +number2
}

const result = addTwoNumbers(3, 5)
// console.log("result:", result);      

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter aa username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))        // hitesh just logged in
// console.log(loginUserMessage(""))              // just logged in
// console.log(loginUserMessage())                // undefined just logged in

/*
function loginUserMessage(username = "sam"){ ..}  // means that   we pass null value console.log(loginUserMessage())    output = sam just logged in
                                                  // but we pass value console.log(loginUserMessage("hitesh")) value will be over write  output will be hitesh just logged in
*/ 
//********************** part=2  functions with objects **************

/*
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));    // output = [500, 2000]
*/

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));  // output = [200, 400, 500, 2000]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

 //handleObject(user)         // ouptut = Username is hitesh and Price is 199
handleObject({
    username: "sam",
    price: 399
})                           // output = Username is sam and Price is 399

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));            // 400 
console.log(returnSecondValue([200, 500, 100, 1000]));