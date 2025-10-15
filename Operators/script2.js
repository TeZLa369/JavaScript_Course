
// ======================================================
// 📘 JavaScript Operators
// ======================================================

// ------------------------------------------------------
// 1. Arithmetic Operators
// ------------------------------------------------------
// +  Addition
// -  Subtraction
// *  Multiplication
// /  Division
// %  Modulus (remainder)
// ** Exponentiation (power)

console.log("***** ARITHMETIC *****");
console.log(10 + 5);  // 15
console.log(10 - 5);  // 5
console.log(10 * 5);  // 50
console.log(10 / 5);  // 2
console.log(10 % 3);  // 1
console.log(2 ** 4);  // 16 (2^4)


// ------------------------------------------------------
// 2. Comparison Operators
// ------------------------------------------------------
// ==   Loose equality (checks value only, allows coercion)
// ===  Strict equality (checks value + type)
// !=   Loose inequality
// !==  Strict inequality
// <, >, <=, >=  Relational comparisons
// !   Logical NOT
// !!  Double NOT → converts value to boolean

console.log("\n***** COMPARISON *****");
console.log(12 == "12");   // true → value only
console.log(12 === "12");  // false → type mismatch
console.log(12 != "12");   // false → values equal
console.log(12 !== "12");  // true → type different
console.log(!!"Hello");    // true → non-empty string is truthy
console.log(!!0);          // false → 0 is falsy


// ------------------------------------------------------
// 3. Assignment Operators
// ------------------------------------------------------
// =   Assign
// +=  Add and assign
// -=  Subtract and assign
// *=  Multiply and assign
// /=  Divide and assign
// %=  Modulus and assign

console.log("\n***** ASSIGNMENT *****");
let a = 43;
a += 5;   // 48
console.log(a);
a -= 11;  // 37
console.log(a);
a *= 2;   // 74
console.log(a);
a /= 8;   // 9.25
console.log(a);
a %= 4;   // 1.25
console.log(a);


// ------------------------------------------------------
// 4. Logical Operators
// ------------------------------------------------------
// &&  AND → true if both sides true
// ||  OR  → true if any side true
// !   NOT → inverts boolean

console.log("\n***** LOGICAL *****");
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false


// ------------------------------------------------------
// 5. Unary Operators
// ------------------------------------------------------
// +   Converts to number
// -   Negates value
// ++  Increment
// --  Decrement
// typeof → returns type of value

console.log("\n***** UNARY *****");
console.log(+"5");   // 5 (string → number)
console.log(+"Hi");  // NaN (not a number)

let num1 = 12;
let num2 = 15;
console.log(++num1); // 13 → increment first, then print
console.log(num2++); // 15 → print first, then increment
console.log(num2);   // 16

let x = 4;
let y = x++;
console.log(x, y);   // 5, 4

let n = 5;
let result = n++ + ++n; // 5 + 7 = 12
console.log("Result is:", result);


// ------------------------------------------------------
// 6. Ternary Operator
// ------------------------------------------------------
// condition ? valueIfTrue : valueIfFalse

console.log("\n***** TERNARY *****");
3 > 6 ? console.log("True") : console.log("False"); // False
3 < 6 ? console.log("True") : console.log("False"); // True

let score = 78;
let grade = score >= 90 ? "A"
    : score >= 75 ? "B"
        : score >= 60 ? "C"
            : "Fail";
console.log("The grade is:", grade);


// ------------------------------------------------------
// 7. typeof Operator
// ------------------------------------------------------
// typeof → returns type of a value
// ⚠️ Caveats:
// typeof null → "object" (bug in JS since the beginning)
// typeof []   → "object" (arrays are objects)
// typeof NaN  → "number" (NaN is still a number type)

console.log("\n***** TYPEOF *****");
console.log(typeof null); // "object" ❌ misleading
console.log(typeof []);   // "object" ❌ misleading
console.log(typeof NaN);  // "number" ❌ misleading


// ------------------------------------------------------
// 8. instanceof Operator
// ------------------------------------------------------
// Checks if an object is an instance of a constructor
// Works only with reference types

console.log("\n***** INSTANCEOF *****");
let arr = [];
console.log(typeof arr);           // "object" ❌ not specific
console.log(arr instanceof Array); // true ✅ correct

let bro = {};
console.log(bro instanceof Object); // true