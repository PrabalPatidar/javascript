const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user Details from Database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

      return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor );
// console.log(userTwo);                           

// jese hi aap new keyword use karte hai to sabse pehle ek empty object create hota hai
// jisko instance bola jata hai jese ki hamne dekha node ke case me this kara to ek  this empty keyword generate hua 
// to baar baar this likhege to baar baar empty paranthesis generate hoge jisko bolte hai ki ek naya object create hota hai

/*
step 1 = naya object create hota hai
step 2 = constructor function call hota hai new keyword ke karan
step 3 = this keyword ke ander sare argument inject ho jate hai
step 4 = mil jate hai function ke ander
*/



