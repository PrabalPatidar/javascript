// var c = 300          // fir bhi output 30 hi aayega isliye var use nhi karna chahiye
let a = 300
if (true) {               // if ke ander hai block scope  iske bahar jo bhi likhege wo hoga global scope
    let a = 10            // global scope me aap jo bhi likhege wo availble hogi block scope ke ander
    const b = 20          // block scope ke ander jo bhi value likhte hai wo scope ke bahar nhi jani chahiye
   // console.log("INNER:",a);      // a = 10
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// console.log("GLOBAL",a);         // a = 300 because global me let a = 300 hai isliye

 // console.log(a);          // ReferenceError: a is not defined
// console.log(b);          // ReferenceError: b is not defined
// console.log(c);             // 30

// ***************** part=2  Scope level and mini hoisting ***************

/*
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

one()
*/

if (true) {
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
   // console.log(website);
}

// console.log(username);

//  ++++++++++++++++ interesting ++++++++++++++++

console.log(addone(5));           // is function syntax me  declaration se pehle value use kar pa rhe hai
function addone(num){             // output = 6
    return num + 1
}

// console.log(addone(5));        // 6

addTwo(5)
const addTwo = function(num){              // output =  Cannot access 'addTwo' before initialization
    return num + 2                         // // is function syntax me  declaration se pehle value use nhi kar pa rhe hai
}

