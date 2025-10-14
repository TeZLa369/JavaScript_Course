//! var, let, const
var a; //declare karna
var b = 12; // declare and inintialize karna
// window mein add hota hai;
// function mein use kar sakte hai
// we can declare again without any error, like down below:
var b = 43; // new declared


//^ So we will use "let" from now as it will show errors

//^ To keep a value constant we use "const"
const hero = "Biraj"
const heroine = "Katrina"


//! SCOPE
// global, block, functional

var c = 43; // global

{
    var d = 23; // block
}

function abcd() {
    if (true) {
        var e = 22; //functional
        let f = 4;
    }
    console.log(e); // can still use value of "e" outside if, var ka issue
    console.log(f); // but we can't use the value of let outside if else statement,❌ ReferenceError: f is not defined

}



// ! Temporal Dead Zone TDZ: area where Js knows the variable exists but it can't give the value
// defined baad mein but used earlier.
// its like asking for something which is going to happen in the future but u want it right now

console.log(newVal);
let newVal = 32;

//! Hoisting impact per type
var g = 32;
// ^ this will break down as:
// var g = undefined; this will go to the top line of code
// g = 32; will stay on its location.
// ^ that's why we don't get errors in TDZ karon variable tu undefined buli tu atleast uporot ye define hoi ase :)






