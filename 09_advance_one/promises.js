//fetch('https://something.com').then().catch().finally.apply() 

// promises

const promiseOne = new Promise(function(resolve, reject){
    // do an sync task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Asyn task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

// ***********************************************************

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// ************************************************************

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
     console.log(user);
})

// *************************************************************

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true            // true or false both try karna hai
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')  
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is resolved or rejected"))

// *************************************************************

 const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true             // true or false both try karna hai
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')  
        }
    }, 1000)
 })
 
 async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
 }

consumePromiseFive()


// all code is fully working
/*
async function getAllUsers(){
  try {
    const response =  await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response);
    const data = await response.json()         // data time leta hai await lagana hai
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers()
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


//  





