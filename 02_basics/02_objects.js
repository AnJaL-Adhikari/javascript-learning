// Singleton
// Object.create

// Object Literals

const mySym = Symbol("key1")
const JsUser = {
   name : "Boyd", 
   "fullname" : "Boyd Stevens",
   age : 34,
   [mySym] : "mykey1",  // Use a symbol as an object key with a value # Without brackets, mySym would be treated as a normal text key.
   location : "Post Office",
   email: "boydthesheriff.com",
   isLoggedIn : false,
   lastLoginDays: ["Monday" , "Saturday"]
}

console.log(JsUser.email) // Access object property using dot notation (property name is written directly)
  
console.log(JsUser["email"])// Access object property using bracket notation (property name is written as a string)
console.log(JsUser["fullname"])

console.log(JsUser[mySym])   // Access the value of the Symbol key from the object
console.log(typeof mySym) // Check the data type of mySym => symbol
    

JsUser.email = "boydfromthefromseries.com"  // Update the email property of the object

// Object.freeze(JsUser)  // Freeze the object and prevent any further changes

JsUser.email = "boydfromthewoods.com" // Attempt to update the frozen object's email property (will not change)
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);  // Use template literals for string interpolation with object properties
   // ${this.name} uses the current object context (this) to access the name property.
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



//Two ways to define an object
// const tinderUser = new Object()  //An empty object using the Object constructor method
 const tinderUser = {}   // An empty object using object literal syntax (commonly preferred)

  tinderUser.id = "123abc"
  tinderUser.name = "Samay"
  tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {                 //nested object to store user details
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Samay",
            lastname : "Raina"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)  // Access and display the nested firstname property from the object

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj3 = {5: "e" , 6: "f"}

const obj3 = {obj1, obj2}

const obj4 = Object.assign({},obj1 , obj2,  obj3)  // Merge multiple objects into a new object without modifying the original objects
const obj4 = {...obj1 , ...obj2 , ...obj3}    //Merge multiple objects into a new object using the spread operator
console.log(obj4)


const users = [
    {
        id : 1,
        email : "h@gmail.com"
    }, 
    {
        id : 2,
        email : "hi@gmail.com"
    },
     {
        id : 3,
        email : "hello@gmail.com"
    },
]

console.log(users[1].email) // Access and display the email property of the second object in the users array

console.log(tinderUser)
  console.log(Object.keys(tinderUser));  // Get an array of all property names (keys) in the object
  console.log(Object.values(tinderUser)); // Get an array of all property values in the object
  console.log(Object.entries(tinderUser)) // Get an array of key-value pairs from the object

  console.log(tinderUser.hasOwnProperty('isLoggedIn'))   // Check whether the object contains the specified property


  const course = {
    coursename : "javascript",
    price : "999",
    courseInstructor : "hitesh"
}
// Access and display the course name using dot notation
console.log(course.coursename)
console.log(course.price)
console.log(course.courseInstructor)

// Destructure object properties and rename selected variables
const {coursename : course , price , courseInstructor : instructor} = course 


// Display the destructured course name, price and instructor variables
console.log(course)
console.log(price)
console.log(instructor)


//A valid JSON object
// {
//   "name": "Samay Raina",
//   "coursename": "latent",
//   "price": "free",
//   "platform": "youtube & netflix"
// }

[
    {},
    {},
    {}
]
  
