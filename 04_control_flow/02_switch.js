// ------------------------------------
// switch Statement
// ------------------------------------

// Syntax:
//
// switch (expression) {
//     case value1:
//         // Code to execute
//         break;
//
//     case value2:
//         // Code to execute
//         break;
//
//     default:
//         // Executes if no case matches
//         break;
// }

// The value to be checked
const month = "May";

// switch compares the expression with each case using strict equality (===)
switch (month) {

    case 1:
        console.log("January");
        break; // Stops execution here if matched

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case "May":
        console.log("May");
        break;

    // Executes when no case matches
    default:
        console.log("Invalid month");
        break;
}

// Thinks to remember
/*
i) switch compares values using strict equality (===).
ii) break stops execution after a matching case.
iii)nWithout break, execution continues into the next case (fall-through).
*/



// Switch without break

const day = 2;

switch (day) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");

    default:
        console.log("Done");
}