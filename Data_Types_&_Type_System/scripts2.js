// ======================================================
// 📘 JavaScript Data Types
// ======================================================

// ------------------------------------------------------
// 1. PRIMITIVE TYPES
// ------------------------------------------------------
// - Stored directly in memory
// - When copied, we get a real copy (not a reference)
// - Examples: string, number, boolean, null, undefined, symbol, bigint

let a = 6;
let b = a; // copy of value
console.log("a:", a);
a = a + 3;
console.log("New a:", a, "\nb:", b);
// b is still 6 → primitives are independent copies
// Analogy: I am John, you can also be John, but from a different mom.
// If I get a laptop from my mom, it doesn’t mean you’ll get one too.

// * String
let str = "Hi"; // "Hi", 'Hi', `Hi`

// * Number
let num = 12.36;

// * Boolean
let isCool = true;

// * null → explicitly no value
let t1 = null;

// * undefined → declared but not assigned
let t2;
console.log("t2 value:", t2); // undefined

// * Symbol → unique, immutable identifiers
// Useful to avoid accidental overwrites in objects (e.g., 3rd party libs)
let rdParty = {
    id: 32,
    userName: "Rohan",
    k1: "abc"
};

rdParty.id = 54; // accidentally overwrote original field
console.log("After overwrite:", rdParty);

// Using Symbol to avoid conflicts
let k1 = Symbol("xyz");
let k2 = Symbol("xyz");
console.log("Symbols are equal?:", k1 === k2); // false → always unique
rdParty[k1] = "jkl";
console.log("After using Symbol:", rdParty);

// * BigInt → for very large integers beyond safe limit
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER);
let maxNum = Number.MAX_SAFE_INTEGER;
console.log("maxNum + 2:", maxNum + 2); // ❌ precision issue

let ab = 9007199254740991n; // add 'n' at the end
console.log("Type of ab:", typeof ab); // bigint
console.log("BigInt addition:", ab + 6n); // ✅ works fine


// ------------------------------------------------------
// 2. REFERENCE TYPES
// ------------------------------------------------------
// - Stored as references (pointers to memory location)
// - When copied, we don’t get a new copy, only a reference
// - Examples: arrays, objects, functions

// * Array
let arr = [1, 2, 3];
let brr = arr; // reference copy
brr.pop();
console.log("Array brr:", brr, "\nArray arr:", arr);
// Both changed → same reference
// Analogy: Bhai, ajj se meri gari tumhari bhi hai.
// If bhai crashes it, meri gari bhi kharab hogi. 😅

// * Object
let obj = { userName: "Doli" };
let newName = obj; // reference copy
newName.userName = "Doli Chai Wala";
console.log("Object after change:", obj); // changed for both


// ------------------------------------------------------
// 3. DYNAMIC TYPING
// ------------------------------------------------------
// JavaScript is dynamically typed → variable type can change anytime
let dyn = 3;
dyn = null;
dyn = "string";
console.log("Dynamic typing example:", dyn);


// ------------------------------------------------------
// 4. TYPE COERCION & COMPARISON
// ------------------------------------------------------
// * Type coercion → automatic conversion between types

console.log("Coercion with + :", "5" + 1); // "51" → number converted to string
console.log("Coercion with - :", "5" - 1); // 4 → string converted to number

// == vs ===
// == → checks value after coercion
// === → strict check (value + type)
console.log("'5' == 5:", "5" == 5);   // true
console.log("'5' === 5:", "5" === 5); // false


// ------------------------------------------------------
// 5. TRUTHY vs FALSY VALUES
// ------------------------------------------------------
// JS treats every value as either truthy or falsy in conditions
// Falsy values: 0, NaN, null, undefined, "", document.all
// Everything else is truthy

console.log("Falsy checks:", !!NaN, !!null, !!0); // false false false
console.log("Truthy checks:", !!1, !!2, !!3);     // true true true

if (null) { console.log("null is truthy"); } // won’t run
if (1) { console.log("1 is truthy"); }       // runs

// ======================================================
// ✅ SUMMARY
// - Primitives → copied by value
// - Reference types → copied by reference
// - JS is dynamically typed
// - Type coercion can surprise you (== vs ===)
// - Always remember truthy vs falsy values
// ======================================================