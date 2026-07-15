const name = "Anjal"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my  name is ${name} and my repo count is ${repoCount}`)

const gameName = new String ('Anjal');
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase()) // Converts the string to uppercase and prints it to the console.

console.log(gameName.charAt(2));  // Returns the character at index 2 of the string.

console.log(gameName.indexOf('a')) // Returns the index of the first occurrence of 'a' in the string.
// Returns the index of the first 'a', or -1 if 'a' is not found.


const newString = gameName.substring(0,4)  // Extracts characters from index 0 to 3 and creates a new string.
console.log(newString)

const anotherString = gameName.slice(-5);  // Extracts the last 5 characters of the string.
const anotherString = gameName.slice(2,5)  // Extracts the characters from 2th to 5th position 
console.log(anotherString)


const newStringOne = "    mr beast    "
console.log(newStringOne)
console.log(newStringOne.trim())  // Remove the starting and ending spaces from the string 

const url = "https://mrbeast.com/%20jimmy" 
console.log(url.replace('%20' , '-'))   // Replaces a specified part of the string with another value.



const address = 'nepal-koshi-sunsari-dharan-amarpath'
console.log(address.replace('amarpath' , 'coleny'))  // Replaces the specified text in the string with a new value

console.log(address.includes('dharan'))   // Checks if the string contains the specified text.


console.log(address.split('-'))  // Splits the string into an array using '-' as the separator.