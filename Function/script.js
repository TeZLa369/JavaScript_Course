let fun = function () {
    console.log("This is a fucking function!")
}

let fatArrowFun = () => {
    console.log("This is a fucking fat arrow function!");
}

let dance = (animal) => {
    console.log(`${animal} is dancing`)
}

function add(v1, v2) {
    console.log(v1 + v2);
}

function sub(v1 = 4, v2 = 5) { //^default parameters
    console.log(v1 - v2);

}


// ^ ... is called as rest or spread, used to store multiple values as an array.
// ^ If it is used in function: Rest Operator
// ^ In arrays or Objects: Spread Operator
function arr(...val) {
    console.log(val)
}

function brr(v1, v2, ...val) {
    console.log(`${v1}, ${v2}`);
    console.log(val)
}

function wapas() {
    return 369;
}


fun()
fatArrowFun()
dance("tiger")
dance("Lion")
add(1, 2);
sub()
sub(32, 5)
arr(1, 2, 4, 5, 632, 3, 43, 43, 434, 3)
brr(3, 32, 32, 23, 2, 43, 43, 434, 3)

let value = wapas()
console.log(value)

// ! FIRST CLASS FUNCTIONS
//^ Functions which can be treated as values
let abcd = function () { }

function xyz(val) {
    val();
}

xyz(function () {
    console.log("Hey there");
})


// ! HIGHER ORDER FUNCTIONS
// ^ Functions which can accept a function or can return a function 
function highFun(val) {

}

highFun(function () {

})
// ^ OR
function highFun() {
    return function () { console.log("Function Inside Function") }
}

highFun()()

//! PURE VS IMPURE FUNCTIONS
let a = 42;
// ^ PURE:
function pure() {
    console.log("HELLLLLOOOOOO!")
    //^ doesn't change any outside value
}
// ^ IMPURE:
function impure() {
    console.log(++a);
    //^ changes outside value
}

pure();
impure();

// ! CLOSURES
// ^ A function which will return another function and the function which is returned it will use parent function's variable
function closure() {
    let xy = 21;
    return function () {
        console.log(xy);
    }
}
closure()();

//! LEXICAL SCOPING
function lexiacal() {
    let a = 43;
    function abc() {
        let b = 67;
        function def() {
            let v = 32;
        }
        // ^ here 'a' can be accessed anywhere in the lexical() function.
        // ^ 'b' can be accessed in abc() and def()
        // ^ 'v' can be accessed in def() only
    }
}


// ! IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IFE)
(
    function () { console.log("It's called immediately") }
)();

// ! HOISTING

hoist();
function hoist() {
    console.log("The function can be called from the above lines also");
}

// ^ But it will not work if the function is defined inside a variable
// noHoist(); //* won't work

let noHoist = function () {
    console.log("You can't call it before this line");
}

//! EX:
//^ return total from any num of inputs
function totalScore(...val) {
    let i = 0;
    let sum = 0;
    while (i < val.length) {
        sum = val[i] + sum;
        i++;
    }
    return console.log(`The sum is: ${sum}`);
}

totalScore(45, 87, 43, 98, 57);


// ^ Reusable discount calculator
function discountCal(discount) {
    return function (price) {
        return price - price * (discount / 100);
    }
}

let ten = discountCal(10);
console.log(ten(200))