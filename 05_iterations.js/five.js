// for each means callbackfn   => call back function ke ander name nhi hota hai --> coding.forEach(  function (name not allow in for each) () {})
 // parametert me aap jo element ko bolna chao wo likh sakte hai

const coding = ["js", "ruby", "java","python", "cpp"]

// coding.forEach(  function (val) {       
//       console.log(val);                          // normal function
// })             

// coding.forEach( (item) => {                          // arrow function
//        console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)            // yaha par function ka reference dena hain --> coding.forEach(printMe) , execute nhi karna hai -> coding.forEach(printMe())


coding.forEach(  (item, index, arr) => {
    // console.log(item, index, arr);
} )

//  this type of scenario is very common
// [{}, {}, {}]    this is very use in for each loop

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach(  (item) => {
    console.log(item.languageName);
} )