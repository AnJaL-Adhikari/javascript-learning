// array
/*An array is an ordered list of values stored in a single variable, 
where each value can be accessed using its index (starting from 0 in JavaScript).*/

const myArr = [0,1,2,3,4,5]
console.log(myArr)

const newArr = new Array(1,2,3,4)
console.log(newArr[1])

// Array Methods

myArr.push(6) // Add a new element to the end of the array
console.log(myArr)
myArr.pop() 
console.log(myArr) //Remove the element from the last position

myArr.unshift(9)  // Add a new element to the beginning of the array
myArr.shift()   // Remove the first element from the array
console.log(myArr)

console.log(myArr.includes(1))   // Check for a value in the array
console.log(myArr.indexOf(1))  // Find the index position of the value  in the array

const newArr = myArr.join()  // Convert the array elements into a single string separated by commas
console.log(myArr)
console.log(newArr)
 

slice , splice 

console.log("A" , myArr)
 
const myn1 = myArr.slice(1,3)  // Create a new array containing elements from index 1 to 2 without changing the original array

console.log(myn1)

console.log("B" , myArr)

const myn2 = myArr.splice(1,3) // Remove 3 elements starting from index 1 and store the removed elements in a new array

console.log(myn2)

console.log("C" , myArr)


const marvel_heros = ["Spiderman" , "Iron man" , "Thor" , "Doctor Strange"]
const dc_heros = ["Superman" , "Bat man" , "Flash" , "Dead pool"]

marvel_heros.push(dc_heros)   // push() adds the entire dc_heros array as a single element and modifies the original marvel_heros array

console.log(marvel_heros)
console.log(marvel_heros.length)


const allHeros = marvel_heros.concat(dc_heros)  // Combine two arrays and create a new array without changing the original arrays
// console.log(allHeros)


const allNewHeros = [...marvel_heros , ...dc_heros] // Spread operator combines elements of both arrays into a new array without modifying the original arrays

const another_array = [1, 2, 3, [4,5,6,], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // Flatten nested arrays into a single array by removing all levels of nesting
console.log(real_another_array)


console.log(Array.isArray(dc_heros))  // Check whether the given value is an array or not

console.log(Array.from("GUARDIANS OF THE GALAXY VOLUME 2"))  // Convert a string into an array of individual characters
// Space is treated as an element in the array


console.log(Array.from({name:"tony shark"})); // Convert an iterable object into an array (object is not iterable, so it returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))  // Create an array from the given values
