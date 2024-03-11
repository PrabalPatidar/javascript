const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]   

// const newNums = myNumbers.map( (num) => num + 10 )         // map best part is ki ye value return automatically karta hai
// const newNums = myNumbers.map( (num) => {return num + 10} )   // jab bhi aap {scope} use karte hai tab return lagana hai

// console.log(newNums);                  output => [ 11, 12, 13, 14, 15, 16, 17, 18, 19,20 ]


const newNums =  myNumbers
                 .map( (num) => num * 10 )
                 .map( (num) => num + 1 )
                 .filter( (num) => num >= 40 )


console.log(newNums);
