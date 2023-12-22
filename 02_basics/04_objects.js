 // const instaUser = new Object()          // this is singleton object
const instaUser = {}                       // this is not singleton object

instaUser.id = "123abc"
instaUser.name = "sam"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "prabal",
            lastname: "patidar"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 5: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)     // The target object to copy to. = Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object
// const obj3 = Object.assign({}, obj1, obj2)  // always prefer this

const obj3 = {...obj1, ...obj2}      // 90% time we use this formet
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));     // har ek key value ko array me bana diya jata  hai  1st property is key and 2nd is value

console.log(instaUser.hasOwnProperty('isLoggedIn'));      // for check the property is available or not
