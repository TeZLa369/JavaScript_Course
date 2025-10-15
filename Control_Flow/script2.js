// ======================================================
// 📘 JavaScript Control Flow: if-else, switch, early return
// ======================================================

// ------------------------------------------------------
// 1. if / else if / else
// ------------------------------------------------------
// Syntax:
// if (condition) { ... }
// else if (anotherCondition) { ... }
// else { ... }

let condition = false;
let condition2 = false;

console.log("***** IF ELSE *****");
if (condition) {
    console.log("This runs if condition is true");
} else if (condition && condition2) {
    console.log("This runs if both condition and condition2 are true");
} else {
    console.log("This runs if condition is false");
}


// ------------------------------------------------------
// 2. Example: Grading System
// ------------------------------------------------------
// Always check invalid cases first → defensive programming
// Then check from highest to lowest range

function getGrade(score) {
    if (score < 0 || score > 100) return "Invalid Marks";
    else if (score >= 90) return "A+";
    else if (score >= 80) return "A";
    else if (score >= 70) return "B";
    else if (score >= 60) return "C";
    else if (score >= 33) return "D";
    else return "Fail"; // covers 0–32
}

console.log("Grade for 60:", getGrade(60));


// ------------------------------------------------------
// 3. Example: Rock-Paper-Scissors
// ------------------------------------------------------
// Rules:
// Rock beats Scissor
// Paper beats Rock
// Scissor beats Paper
// Same choice → Draw

function rps(user, computer) {
    if (user === computer) return "Draw";

    if (user === "rock" && computer === "scissor") return "User";
    if (user === "paper" && computer === "rock") return "User";
    if (user === "scissor" && computer === "paper") return "User";

    return "Computer";
}

console.log("RPS Result:", rps("scissor", "rock")); // Computer wins


// ------------------------------------------------------
// 4. switch case
// ------------------------------------------------------
// Syntax:
// switch(expression) {
//   case value1: ... break;
//   case value2: ... break;
//   default: ...
// }

console.log("\n***** SWITCH *****");
let day = "wednesday";

switch (day.toLowerCase()) { // normalize input
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    case "thursday":
        console.log("Today is Thursday");
        break;
    default:
        console.log("Not a valid weekday");
}


// ------------------------------------------------------
// 5. Early Return Pattern
// ------------------------------------------------------
// Instead of nesting multiple if-else, return early
// → makes code cleaner and avoids deep nesting

console.log("\n***** EARLY RETURN *****");

function getVal(val) {
    if (val < 25) return "D";
    if (val < 50) return "C";
    if (val < 75) return "B";
    return "A"; // default if none of the above
}

console.log("getVal(4):", getVal(4));   // D
console.log("getVal(45):", getVal(45)); // C

// Note: In your original getVal, the order was wrong.
// Always check smallest ranges first, then go up.


// ======================================================
// ✅ SUMMARY
// - if/else → flexible, handles complex conditions
// - switch → cleaner for multiple fixed values
// - early return → avoids deep nesting, improves readability
// ======================================================