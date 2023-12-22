// singleton   //constructor se banate hai to singleton ek object banta hai
// literals se object nhi banega

// object.create


//  object literals

const mySym = Symbol("key1")

const Jsuser ={                   // this topis like // console.log(Jsuser.email);  // console.log(Jsuser["email"]); // console.log(Jsuser[mySym])  is very important for interview
    name: "prabal",
    "full name": "Prabal Patidar",
    [mySym]: "mykey1",        // mySym: "mykey1" this data type is string this is not symbol  
    age: 21,                // if we want to use symbol use  [mySym]: "mykey1"
    location: "indore",
    email: "prabal@google.com",
    isLoggedIn: false,
    lastLogonDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);

// console.log(Jsuser.mySym);
// console.log(typeof Jsuser.mySym);

// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email = "prabal@chatgpt.com"
// Object.freeze(Jsuser)                  // by Freeze in future cant be value change
Jsuser.email = "prabal@microsoft.com"
// console.log(Jsuser);

  Jsuser.greeting = function(){
    console.log("Hello JS user");
  }

// console.log(Jsuser.greeting);      // undefined //[Function (anonymous)]
// console.log(Jsuser.greeting());

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
  }

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

