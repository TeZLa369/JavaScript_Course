// ! Data Type
//! 1
// ^ Primitives: values when copied, we get real copies
// strings, number, boolean, null, undefined, symbol, bigint
let a = 6;
let b = a;
console.log("a: ", a);
a = a + 3;
console.log("New a: ", a, "\nb: ", b); //^ "b" has its own value of 6. Like I am John and you can also be John but of differnt mom.
//^ if I get a laptop from my mom, it doesn't mean ki tumko bhi milega

//* String: "Hi", 'Hi', `Hi`
//* Number: 12, 12.36
//* Boolean: true, false
//* null: user sets the variable as no value.
let t1 = null;

//* undefined: made a variable and gave no value, so it got a value: undefined by default
let t2;
console.log("t2 value: ", t2);

//* symbol: unique immutable value: let Symbol("id")
// like if we use a 3rd party library and it has some fields with values. If we somehow make a similar named field and then it may change the original value of the 3rd party library.
let rdParty = {
    id: 32,
    userName: "Rohan",
    k1: "abc"
}

rdParty.id = 54 //^ if this is our field and we made the change, then by mistake we change the real value of the third party field
console.log(rdParty)

//^ to create Symbol:
let k1 = Symbol("xyz")
let k2 = Symbol("xyz")
console.log("Symbols are similar?: ", k1 === k2) // both are unique
rdParty[k1] = "jkl"
console.log("After using Symbol: ", rdParty)


//*BigINT
console.log(Number.MAX_SAFE_INTEGER);
let maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum + 2) //^ gives wrong value, as precision kharab ho jata hai. So to use greater value than that we use BigInt

let ab = 9007199254740991n; //^ just add 'n' at the end;
console.log(typeof (ab))
console.log(ab + 6n)//^ working properly




//! 2
// ^ Reference: when copies we don't get the real copy, instead we get the reference of the parent
// arrays, objects, functions
// [] {} ()

//* ARRAY:
let arr = [1, 2, 3];
let brr = arr;
//^ its like bhai ajj se meri gari tumhari bhi hai, so if that bhai had an accident then meri gari hi kharab hogi na!
brr.pop();
console.log(brr, "\n", arr) //^ value dono ka change huwa

// * OBJECTS:
let obj = {
    userName: "Doli"
};
let newName = obj;
newName.userName = "Doli Chai Wala";
console.log("OBJECT: ", obj) //^ name got changed

//! 3
// ^DYNAMIC TYPING
// we can change the data as our wish like "let a = 3" can be changed to "a=null" or " a = 'string' ", etc.




//! 4
//^ TYPE COERCION (== vs ===)
//* TYPE COERCION: one type will get automatically converted to another
console.log("TYPE COERCION: ", "5" + 1) //^ it converted the number to string and then concatinated since it saw the + sign
console.log("5" - 1); //^ since '-' only subtracts so 5 string gets converted to number


//^ Truthy vs Falsy Values
//* Js has defined every value as True or False
//* False: 0, NaN, null, document.all, "", undefined
console.log("Falsy: ", !!NaN, !!null, !!0); //^ can be checked by adding !! before the value
console.log("Truthy: ", !!1, !!2, !!3);


if (null) { } // Js sees it as: if(false){}
if (1) { } // Js sees it as: if(true){}

