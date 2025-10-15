//! Arithmetic, comparison, logical, assignment, unary, ternary

//!Arithmetic:
/*
+ - * / % **
*/
console.log("***** Arithmetic *****".toUpperCase())
console.log(2 ** 4); // 2 ^ 4

//!Comparison
/*
= == ===
< > <= >= ! != !== !!
*/
console.log("\n***** COMPARISON *****")
console.log(12 == "12"); // gives true because it doesn't check the type. It only checks the value. Not strict comparison
console.log(12 === "12"); // it checks the type. Strict comparison
//similarly
console.log(12 != "12");
console.log(12 !== "12");


//!assignment
/*
=
+=
*=
/=
%=
*/
console.log("\n***** LOGICAL *****")
let a = 43;
a += 5;
console.log(a)
a -= 11;
console.log(a)
a *= 2;
console.log(a)
a /= 8;
console.log(a)
a %= 4;
console.log(a)


//! Logical
/*
&& => AND=> both side true => true
||=>OR=> any side true=> true
! => NOT => True becomes false and false becomes true. Opposite
*/

//! unary
/*
+ - -- ++ typeof
*/
console.log("\n***** unary *****".toUpperCase())
console.log(+"5"); //^ gets converted to a number
console.log(+"Hi"); //^ gets converted to a not a number

let num1 = 12;
let num2 = 15;
console.log(++num1); //increase first then print
console.log(num2++); //first print then increase
console.log(num2)

let x = 4;
let y = x++;
console.log(x, y);

let n = 5;
let result = n++ + ++n; //=> 5+7
console.log("Result is: ",result);


//! Ternary
/*
?: => condition ? if true : if false
*/
console.log("\n***** Ternary *****".toUpperCase())
3 > 6 ? console.log("True") : console.log("False")
3 < 6 ? console.log("True") : console.log("False")

let score = 78;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
console.log("The grade is: ", grade);

//! typeof
console.log("\n***** typeof *****".toUpperCase())
console.log(typeof (null))
console.log(typeof [])
console.log(typeof NaN)
//^ the above three types given by typeof are not correct

//! instanceof => works with reference values only
console.log("\n***** instance *****".toUpperCase())
let arr = []
console.log(typeof arr) // wrong
console.log(arr instanceof Array)// right

let bro = {}
console.log(bro instanceof Object) 