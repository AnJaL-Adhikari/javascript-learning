// Primitive datatypes

// 7 types : String , Number , Boolean, null, undefined, Symbol , BigInt



// JavaScript is dynamically typed because
// i) Variables do not have fixed types.
// ii) The type is determined at runtime based on the value assigned.
// iii) A variable can hold values of different types over its lifetime.


const score = 100
const scoreValue = 100.3
 const isLoggedIn = false
 const outsideTemp = null


//  let userEmail;
//  let useEmail = undefined  // both assigns the undefined value

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3874387438743748374837483748n
console.log(bigNumber)



// Reference Type (Non primitive datatypes)

// Array, Objects , Functions 


const heros = ["ironman" , "thor" , "hulk", "doctorstrange"] //Array
let myObj =           //Object
{  
    name : 'spiderman',
    age : 22
}

console.log(heros)
console.log(myObj.name)

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof myObj)
console.log(typeof outsideTemp) // data type of null returns object 
console.log(typeof myFunction)

// Link to study : https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)


let myYoutubename = "mrbeast"

let anotherName = myYoutubename
anotherName = "beastdotcom" 

console.log(myYoutubename)
console.log(anotherName)

let userOne = {
    email : "usergoogle.com",
    address : "Dharan"
};
let userTwo = userOne;
userTwo.email = "beastgoogle.com"

console.log(userOne.email)
console.log(userTwo.email)