// ------------------------------------
// reduce() Method
// ------------------------------------

// reduce() executes a reducer function on each element
// of an array and returns a single accumulated value.
//
// Common uses:
// - Calculate total
// - Sum values
// - Count items
// - Transform data


const myNums = [1, 2, 3];


// Using reduce() with normal function

// acc (accumulator) stores the result after each iteration
// currValue (current value) represents the current array element

const myTotal = myNums.reduce(function (acc, currValue) {

    console.log(`accumulator : ${acc} and current value : ${currValue}`);

    // Return updated accumulator value
    return acc + currValue;

}, 0); // 0 is the initial value of accumulator


console.log(myTotal);


// ------------------------------------
// reduce() using Arrow Function
// ------------------------------------

// Shorter syntax of reduce()

const myTotalOne = myNums.reduce(
    (acc, currValue) => acc + currValue,
    0
);


console.log(myTotalOne);


// ------------------------------------
// reduce() with Array of Objects
// ------------------------------------

// Shopping cart containing objects
const shoppingCard = [

    {
        itemName: 'js course',
        price: 2999
    },

    {
        itemName: 'python',
        price: 1999
    },

    {
        itemName: 'app development',
        price: 4999
    },

    {
        itemName: 'tailwind css',
        price: 499
    },

];


// Calculate total price of all items
//
// acc starts with 0
// item represents each object in the array
// item.price gives the price value of each product

const priceToPay = shoppingCard.reduce(
    (acc, item) => acc + item.price,
    0
);


console.log("Price to pay :", priceToPay);