let score = null

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ram" => true (here ram is of datatype string)


let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber)


//************* Operations *********************

let value = 3
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // 2**2 is 2 to the power 2
console.log(2/3);
console.log(2%2); // % is modulus which returns the remainder when one number is divided by another.

let str1 = "Hello"
let str2 = "Ram"

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2")
console.log("1" + 2 +2);
console.log(1 + "2" +2);
console.log(1 + 2 +"2");

console.log( (2+3) * 5 % 3)

console.log(+true)  // output = 1
console.log(+"") // output = 0

let num1, num2, num3

let gameCounter = 100

gameCounter++
console.log(gameCounter);


let a, x,y
a = 5;
x = a++;   // x = 5, a = 6
y = ++a;   // a = 7, y = 7

// a++ (post-increment): Uses the current value of a first, then increases a by 1.
// ++a (pre-increment): Increases a by 1 first, then uses the new value
console.log(a)
console.log(y)





