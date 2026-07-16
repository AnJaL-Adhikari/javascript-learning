// Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
console.log(typeof myDate);


let  myCreatedDate = new Date(2026, 0 , 35) 
 // Create a Date object by specifying the year, month (0 = January), and day.
// If the day exceeds the number of days in the month, JavaScript automatically
// adjusts the date to the correct following month. // Here the output is Wed Feb 04 2026
console.log(myCreatedDate.toDateString())



// Create a Date object from a date string in the YYYY-MM-DD format.
let  myCreatedDateOne = new Date("2026-07-16")
let  myCreatedDateTwo = new Date("07-16-2026")
console.log(myCreatedDateOne.toLocaleDateString())
console.log(myCreatedDateTwo.toLocaleDateString())


let myTimeStamp = new Date()
console.log(myTimeStamp)   //Prints the Date object in a human-readable format.
 console.log(myTimeStamp.getTime())   //Prints the timestamp in milliseconds since January 1, 1970 (Unix Epoch).
 console.log(Math.floor(Date.now()/1000))
/*Date.now() returns the current time in milliseconds.
Dividing by 1000 converts it to seconds.
Math.floor() removes the decimal part, giving the current Unix timestamp in seconds.
*/



let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())


// newDate.toLocalString('default' , {
//     weekday : "long"
// })


