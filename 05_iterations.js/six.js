// const coding = ["js", "ruby", "java","python", "cpp"]


// const values = coding.forEach(  (item) => {
//        console.log(item);                    // for each hai ye koi bhi  value return nhi karta hai aap chahe ya nhi chahe ye value return nhi hi karta hai 
//        return item
// }  );

// console.log(values);

// **********************************************************************

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter(  (num) =>  num > 4 )               // filter values return karta hai par for each return nhi karta hai
// console.log(newNums);                                 // [ 5, 6, 7, 8, 9, 10 ]

// jab bhi hum  filter use karte hai filter ke ander hume call back  function milega  jiske Ander har value ko each  access kiya jayega
// lekin uske baad kya hoga aapko deni hogi condition jo jo log us condition ko satisfy karge or true hogi condition 
// vo vo value return ki jayegi  varna vo value return nhi hogi isse ko kehte hai basic filter ka

//*****************************************************************

/* this is important to understand 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter(  (num) =>  {      // output = []     because pehle hum (parantheis) lga rhe the to return ho rha tha
    return num > 4                                    // par aapne ab {scope} lga diya hai to ab aapko return keyword likhna hi hoga
} )                                            // ye galti hoti hai keep focusing on that
console.log(newNums);
*/ 
//********************************************************** 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);                // output => [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userBooks = books.filter( (bk) => bk.genre === "History" )

  // userBooks = books.filter( (bk) => bk.publish >= 2000  )
// userBooks = books.filter( (bk) => { return bk.publish >= 2000}  )

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
}  )
console.log(userBooks);






