const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`); 
}

// array in for in

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   //  console.log(key);      // output => 0  1  2  3  4
   //  console.log(programming[key]);
   // output => js  rb  py  java   cpp
}

// const map = new Map()                      // map is not iterable 
// map.set('IN', "India")                     // agar koi iterable nhi hai to use is tarike se loop pe nhi likha ja sakta hai
// map.set("USA", "United States Of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);   
// }

/*               IMPORTANT
 object ke upper loop lagana ho to hum ( for in loop ) 
array ke upper loop lagana ho to hum (for of loop )
*/

