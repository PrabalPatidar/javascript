 const marvel_heros = ["thor", "Ironman", "spiderman"]
 const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)          // concat merge only 2 Array
// console.log(allHeros);
 
const all_new_heros = [...marvel_heros, ...dc_heros]       //spred merge many arrays

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4 ,5]]]

const real_another_array = another_array.flat(Infinity)   // flat(no of depth)  return a new array with all sub array element
console.log(real_another_array);

console.log(Array.isArray("prabal"));   // question ask kya yah array hai kya
console.log(Array.from("prabal"));      // convert into array
console.log(Array.from({name: "prabal"}));   // interesting because dont know array from keys object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // return a new array from a set of element

