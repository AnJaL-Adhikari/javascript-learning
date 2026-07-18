// ------------------------------------
// forEach() does not return a value
// ------------------------------------

// forEach is used to execute a function for each element
// in an array, but it always returns undefined.

const coding = ['js', 'rb', 'py', 'Java', 'cpp'];


const values = coding.forEach((item) => {

    // console.log(item);

    // Returning a value from forEach callback
    // does not return anything to the outside variable
    return item;
});


console.log(values); // Output: undefined


// ------------------------------------
// filter() Method
// ------------------------------------

// filter() creates a new array containing elements
// that satisfy the given condition.

// Syntax:
// array.filter((element) => condition)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Short arrow function syntax
const newNums = myNums.filter((num) => num > 4);


// Same filter example using return statement
// const newNums = myNums.filter((num) => {
//     return num > 4;
// });


console.log(newNums);


// ------------------------------------
// Using forEach instead of filter
// ------------------------------------

// We can achieve the same result using forEach()
// by manually pushing matching values into a new array.

const filteredNums = [];

myNums.forEach((num) => {

    // Check condition
    if (num > 4) {

        // Add matching values to the new array
        filteredNums.push(num);
    }

});


console.log(filteredNums);


// ------------------------------------
// filter() with Array of Objects
// ------------------------------------

// Array containing book objects
const books = [

    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Science', publish: 1995, edition: 2010 },
    { title: 'Book Three', genre: 'History', publish: 1978, edition: 2001 },
    { title: 'Book Four', genre: 'Mystery', publish: 2002, edition: 2015 },
    { title: 'Book Five', genre: 'Fantasy', publish: 1990, edition: 2008 },
    { title: 'Book Six', genre: 'Biography', publish: 1988, edition: 2012 },
    { title: 'Book Seven', genre: 'Romance', publish: 2005, edition: 2020 },
    { title: 'Book Eight', genre: 'History', publish: 1999, edition: 2018 },
    { title: 'Book Nine', genre: 'Adventure', publish: 1975, edition: 1998 },
    { title: 'Book Ten', genre: 'Technology', publish: 2010, edition: 2023 }

];


// Filter books based on genre
// Only books with genre "History" will be returned

const userBooks = books.filter((bk) => bk.genre === "History");


console.log(userBooks);


// ------------------------------------
// Filter books based on publish year
// ------------------------------------

// Returns books published in or after the year 2000

const userBooksAfter2000 = books.filter((book) => {

    return book.publish >= 2000;

});


console.log(userBooksAfter2000);