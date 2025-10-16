// ======================================================
// 📘 JavaScript Functions: Types, Concepts & Patterns
// ======================================================

// ------------------------------------------------------
// 1. Function Expressions vs Arrow Functions
// ------------------------------------------------------

// Function Expression (anonymous function assigned to variable)
let fun = function () {
    console.log("This is a normal function expression!");
};

// Arrow Function (shorter syntax, no own 'this')
let fatArrowFun = () => {
    console.log("This is a fat arrow function!");
};

// Arrow function with parameter
let dance = (animal) => {
    console.log(`${animal} is dancing`);
};

// Normal function declaration
function add(v1, v2) {
    console.log(v1 + v2);
}

// Default parameters
function sub(v1 = 4, v2 = 5) {
    console.log(v1 - v2);
}


// ------------------------------------------------------
// 2. Rest & Spread Operators
// ------------------------------------------------------
// - Rest: collects multiple arguments into an array (in function params)
// - Spread: expands arrays/objects into individual elements

function arr(...val) {
    console.log("Rest values:", val);
}

function brr(v1, v2, ...val) {
    console.log(`First two: ${v1}, ${v2}`);
    console.log("Remaining:", val);
}


// ------------------------------------------------------
// 3. Returning Values
// ------------------------------------------------------
function wapas() {
    return 369;
}


// ------------------------------------------------------
// 4. Function Calls
// ------------------------------------------------------
fun();
fatArrowFun();
dance("Tiger");
dance("Lion");
add(1, 2);
sub();
sub(32, 5);
arr(1, 2, 4, 5, 632, 3, 43, 43, 434, 3);
brr(3, 32, 32, 23, 2, 43, 43, 434, 3);

let value = wapas();
console.log("Returned value:", value);


// ------------------------------------------------------
// 5. First-Class Functions
// ------------------------------------------------------
// Functions can be treated as values (assigned, passed, returned)

let abcd = function () { };

function xyz(val) {
    val(); // calling the function passed as argument
}

xyz(function () {
    console.log("Hey there (First-Class Function demo)");
});


// ------------------------------------------------------
// 6. Higher-Order Functions
// ------------------------------------------------------
// Functions that accept other functions OR return functions

function highFun1(callback) {
    console.log("Inside highFun1");
    callback();
}

highFun1(function () {
    console.log("Callback executed");
});

// Returning a function
function highFun2() {
    return function () {
        console.log("Function Inside Function");
    };
}

highFun2()(); // immediately invoke returned function


// ------------------------------------------------------
// 7. Pure vs Impure Functions
// ------------------------------------------------------
let a = 42;

// Pure → no side effects, doesn’t change outside values
function pure() {
    console.log("HELLO! I am pure.");
}

// Impure → modifies external state
function impure() {
    console.log(++a); // modifies outer variable
}

pure();
impure();


// ------------------------------------------------------
// 8. Closures
// ------------------------------------------------------
// A closure is when a function "remembers" variables from its parent scope

function closure() {
    let xy = 21;
    return function () {
        console.log("Closure accessing xy:", xy);
    };
}

closure()(); // inner function still has access to xy


// ------------------------------------------------------
// 9. Lexical Scoping
// ------------------------------------------------------
// Inner functions can access variables from outer functions

function lexical() {
    let a = 43;
    function abc() {
        let b = 67;
        function def() {
            let v = 32;
            console.log("Inside def:", a, b, v);
        }
        def();
    }
    abc();
}
lexical();


// ------------------------------------------------------
// 10. Immediately Invoked Function Expression (IIFE)
// ------------------------------------------------------
// Runs immediately after being defined

(function () {
    console.log("IIFE executed immediately!");
})();


// ------------------------------------------------------
// 11. Hoisting
// ------------------------------------------------------
// Function declarations are hoisted → can be called before definition

hoist();
function hoist() {
    console.log("This function can be called before its definition");
}

// Function expressions are NOT hoisted
// noHoist(); // ❌ ReferenceError
let noHoist = function () {
    console.log("You can't call me before this line");
};


// ------------------------------------------------------
// 12. Example: Sum of Any Number of Inputs
// ------------------------------------------------------
function totalScore(...val) {
    let i = 0;
    let sum = 0;
    while (i < val.length) {
        sum += val[i];
        i++;
    }
    console.log(`The sum is: ${sum}`);
}

totalScore(45, 87, 43, 98, 57);


// ======================================================
// ✅ SUMMARY
// - Function Expression vs Arrow vs Declaration
// - Rest/Spread operators
// - First-Class & Higher-Order Functions
// - Pure vs Impure Functions
// - Closures & Lexical Scoping
// - IIFE & Hoisting
// ======================================================