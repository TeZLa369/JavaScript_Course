// ======================================================
// 📘 JavaScript Variables, Scope, Hoisting & TDZ
// ======================================================

// -----------------------------
// 1. var, let, const
// -----------------------------

// var → function-scoped or global-scoped
// - Can be re-declared and updated
// - Hoisted with value = undefined
// - Added to window object in browsers
var a; // declaration
var b = 12; // declaration + initialization
var b = 43; // re-declaration allowed ✅

// let → block-scoped
// - Can be updated but not re-declared in same scope
// - Hoisted but kept in Temporal Dead Zone (TDZ)
// - Not added to window object
let x = 10;
// let x = 20; ❌ Error: cannot re-declare in same scope

// const → block-scoped
// - Must be initialized at declaration
// - Cannot be re-assigned or re-declared
// - Hoisted but also in TDZ
const hero = "Biraj";
const heroine = "Katrina";
// heroine = "Deepika"; ❌ Error: Assignment to constant variable


// -----------------------------
// 2. Scope Types
// -----------------------------

// Global Scope → accessible everywhere
var globalVar = 100;

{
    // Block Scope → accessible only inside {}
    let blockVar = 200;
    const blockConst = 300;
    var blockIgnored = 400; // var ignores block scope
}
// console.log(blockVar); ❌ ReferenceError
console.log(blockIgnored); // ✅ 400 (var leaks out of block)

// Function Scope → variables declared with var inside function
function demoScope() {
    var funcVar = 500;
    console.log(funcVar); // ✅ accessible here
}
// console.log(funcVar); ❌ ReferenceError


// -----------------------------
// 3. var vs let inside if/loops
// -----------------------------

function testVarLet() {
    if (true) {
        var v = "I am var";   // function-scoped
        let l = "I am let";   // block-scoped
    }
    console.log(v); // ✅ works (var leaks out of block)
    // console.log(l); ❌ ReferenceError (let is block-scoped)
}
testVarLet();


// -----------------------------
// 4. Temporal Dead Zone (TDZ)
// -----------------------------

// TDZ = time between hoisting and initialization
// Accessing variable in TDZ → ReferenceError
// Example:
try {
    console.log(newVal); // ❌ ReferenceError
    let newVal = 32;
} catch (err) {
    console.log("TDZ Error:", err.message);
}


// -----------------------------
// 5. Hoisting
// -----------------------------

// var → hoisted & initialized with undefined
console.log(hoistVar); // ✅ undefined
var hoistVar = 42;

// let/const → hoisted but not initialized (TDZ)
try {
    console.log(hoistLet); // ❌ ReferenceError
    let hoistLet = 99;
} catch (err) {
    console.log("Hoisting with let:", err.message);
}


// -----------------------------
// 6. Quick Recap
// -----------------------------

// var   → function/global scope, re-declare allowed, hoisted as undefined
// let   → block scope, re-declare ❌, hoisted but TDZ
// const → block scope, re-declare ❌, re-assign ❌, hoisted but TDZ
