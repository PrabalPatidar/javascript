// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {            //  ye object js wala nhi hai , ye object wo hai  kis cheej pe loop lagana hai
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

// Maps                //The keys() method of Map instances returns a new map iterator object that contains the keys for each element in this map in insertion order.

 const map = new Map()            // in map duplicate value is not allowed
map.set('IN', "India")
map.set("USA", "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);

 for (const key of map) {           // output => [ 'IN', 'India' ]
    //console.log(key);              //            [ 'USA', 'United States Of America' ]
 }                                 //            [ 'Fr', 'France' ]

for (const [key, value] of map) {            // output =>  IN :- India
    // console.log(key, ':-', value);           //           USA :- United States Of America
}                                            //           Fr :- France


const myObject = {                     // myObject is not iterable  =>'game1': 'NFS' --'game2':  'Spiderman'--'game3':  'gta  in this formet
    game1: 'NFS'                       // also in this formet myObject is not iterable  =>  game1: 'NFS' -- game2:  'Spiderman' -- game3:  'gta'
    // game2:  'Spiderman'
    // game3:  'gta'
}

// for (const [key, value] of myObject) {           // this is not work
//     console.log(key, ':-', value); 
// }




