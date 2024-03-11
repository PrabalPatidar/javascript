const userEmail = "h@hitesh.ai"        

if (userEmail) {
    console.log("Got User Email");          // if  const userEmail = "h@hitesh.ai" 
} else {
    console.log("Don't Have User Email");    // if const userEmail = "" 
}

// flasy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", 'false', " ", [], {}, function(){}

//  if (userEmail.length === 0) {
//     console.log("Array is empty");
//  }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {             //  false == 0     --> true
    console.log("Object is empty");                   //  false == ''    --> true
}                                                     //  0 == ''        --> true

//   Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary  operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
