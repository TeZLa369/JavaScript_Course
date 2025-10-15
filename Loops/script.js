//! for loop
// ^ from where you want to go -> to where you want to go -> how you want to go
//Ex: Count till 50 from 1
console.log("\nFOR Loop")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//^ EVEN NUMs
console.log("\nEven Numbers")
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
//^ ODD NUMs 
console.log("\Odd Numbers")
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}

// ^ SUM
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log("Sum is: ", sum);

//^ USER INPUT
let num = prompt("Enter a number")
function oddEven(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 1) {
            console.log(`Odd: ${i}`)
        }
        if (i % 2 === 0) {
            console.log(`Even: ${i}`)
        }
    }
}
oddEven(num)


//! while
// ^ from where you want to go -> when to stop -> how you want to go
// Ex: Count from 1 till I say "hello"
console.log("\nWHILE")
let i = 1;
while (i < 33) {
    console.log(i)
    i++;
}

//! do while
console.log("\nDo WHILE")
let j = 2;
do {
    console.log(j);
    j++;
} while (j < 12); //^ loop will run atleast for a single time even if the condition is false


// ! break
console.log("\nBreak")
//^ to stop the loop in middle
for (let i = 0; i < 100; i++) {
    console.log(i)
    if (i === 5) {
        break;
    }

}

// ! continue
console.log("\nContinue")
//^ to skip a part of the loop in middle
for (let i = 0; i < 100; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i)

    if (i === 10) {
        break;
    }

}