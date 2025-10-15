// ======================================================
// 📘 JavaScript Loops: for, while, do-while, break, continue
// ======================================================

// ------------------------------------------------------
// 1. for loop
// ------------------------------------------------------
// Syntax: for (start; condition; step) { ... }
// Meaning: from where → to where → how to go

console.log("\n***** FOR LOOP *****");

// Example: Count from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Example: Even numbers from 0 to 20
console.log("\nEven Numbers");
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

// Example: Odd numbers from 0 to 20
console.log("\nOdd Numbers");
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 1) console.log(i);
}

// Example: Sum of numbers from 0 to 100
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log("Sum is:", sum);

// Example: Odd/Even classification (with user input)
// ⚠️ prompt() works only in browsers, not Node.js
// let num = prompt("Enter a number");
function oddEven(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) console.log(`Even: ${i}`);
        else console.log(`Odd: ${i}`);
    }
}
oddEven(10); // demo with fixed input


// ------------------------------------------------------
// 2. while loop
// ------------------------------------------------------
// Syntax: while (condition) { ... }
// Meaning: from where → when to stop → how to go

console.log("\n***** WHILE LOOP *****");

// Example: Count from 1 to 32
let i = 1;
while (i <= 32) {
    console.log(i);
    i++;
}


// ------------------------------------------------------
// 3. do-while loop
// ------------------------------------------------------
// Syntax: do { ... } while (condition);
// Runs at least once, even if condition is false

console.log("\n***** DO-WHILE LOOP *****");

let j = 2;
do {
    console.log(j);
    j++;
} while (j < 12);


// ------------------------------------------------------
// 4. break statement
// ------------------------------------------------------
// Used to exit a loop prematurely

console.log("\n***** BREAK *****");

for (let i = 0; i < 100; i++) {
    console.log(i);
    if (i === 5) break; // stop loop when i = 5
}


// ------------------------------------------------------
// 5. continue statement
// ------------------------------------------------------
// Used to skip the current iteration and move to next

console.log("\n***** CONTINUE *****");

for (let i = 0; i < 100; i++) {
    if (i === 5) continue; // skip printing 5
    console.log(i);

    if (i === 10) break; // stop loop at 10
}


// ======================================================
// ✅ SUMMARY
// - for → best when you know start, end, and step
// - while → best when you only know the stop condition
// - do-while → guarantees at least one execution
// - break → exit loop early
// - continue → skip current iteration
// ======================================================