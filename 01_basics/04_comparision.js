// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
the reason is that an equality check == and comparisons > < >=
<= work diffemtly.
comparisons convert null to a number , treating it as 0.
that's wht (3)null>=0 is true and (1) null >0 is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);      // is tarah ke conversion aapko kabhi bhi confusion me daal sakte hai 
console.log(undefined < 0);

// ===

console.log("2" === 2);