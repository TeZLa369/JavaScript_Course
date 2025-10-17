// ======================================================
// 📘 JavaScript Arrays: Methods, Iteration & Patterns
// ======================================================

// ------------------------------------------------------
// 1. Basics
// ------------------------------------------------------
// Arrays store multiple values (can be of different types in JS).
let marks = [1, 2, 3, 4, 5];
console.log("Initial:", marks);

// Update value at index
marks[3] = 43;
console.log("After update:", marks);


// ------------------------------------------------------
// 2. Adding & Removing Elements
// ------------------------------------------------------
marks.push(323); // add at end
console.log("push:", marks);

marks.pop(); // remove from end
console.log("pop:", marks);

marks.shift(); // remove from start
console.log("shift:", marks);

marks.unshift(99); // add at start
console.log("unshift:", marks);

marks.splice(1, 3); // remove 3 elements starting at index 1
console.log("splice:", marks);


// ------------------------------------------------------
// 3. Slice, Reverse, Sort
// ------------------------------------------------------
marks.push(21, 43, 25, 6);
console.log("After push:", marks);

let newArr = marks.slice(0, 3); // copy from index 0 to 2
console.log("slice:", newArr);

newArr.reverse(); // reverse in place
console.log("reverse:", newArr);

let asc = newArr.sort((a, b) => a - b); // ascending
console.log("sort asc:", asc);

let desc = newArr.sort((a, b) => b - a); // descending
console.log("sort desc:", desc);


// ------------------------------------------------------
// 4. Iteration Methods
// ------------------------------------------------------

// forEach → executes function for each element
marks.forEach((val) => {
    console.log("forEach +5:", val + 5);
});

// map → creates new array with returned values
let mapArr = marks.map((val) => val * 2);
console.log("map (double):", mapArr);

// filter → keeps only values that satisfy condition
let nums = [1, 2, 3, 4, 5, 6, 3, 7, 8];
let filArr = nums.filter((val) => val > 5);
console.log("filter >5:", filArr);

// reduce → reduces array to single value
let ans = nums.reduce((acc, val) => acc + val, 0);
console.log("reduce sum:", ans);

// find → returns first matching element
let findArr = nums.find((val) => val === 3);
console.log("find 3:", findArr);

// some → true if any element matches
let someArr = nums.some((val) => val > 7);
console.log("some >7:", someArr);

// every → true if all elements match
let everyArr = nums.every((val) => val > 0);
console.log("every >0:", everyArr);


// ------------------------------------------------------
// 5. Destructuring
// ------------------------------------------------------
let [a, b] = nums; // first two values
let [c, d, , e] = nums; // skip one
console.log("destructuring:", a, b, c, d, e);


// ------------------------------------------------------
// 6. Spread Operator
// ------------------------------------------------------
let spreadArr = [...nums]; // copy array
console.log("spread copy:", spreadArr);


// ------------------------------------------------------
// 7. Practical Examples
// ------------------------------------------------------

// Add "Mango" at start, "Pineapple" at end
let fruits = ["Apple", "Banana"];
fruits.unshift("Mango");
fruits.push("Pineapple");
console.log("fruits:", fruits);

// Insert "Red" and "Blue" at index 1
let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");
console.log("colors:", colors);

// Extract middle 3 elements
let midArr = [1, 2, 3, 4, 5, 6];
let newMid = midArr.slice(2, 5); // [3,4,5]
console.log("middle slice:", newMid);

// Sort names alphabetically then reverse
let names = ["Zabir", "Rosy", "Abhijit", "Kuntal", "Biraj"];
names.sort().reverse();
console.log("names sorted+reversed:", names);

// map → square each number
let sqArr = [1, 2, 3, 4];
let newSqArr = sqArr.map((val) => val ** 2);
console.log("squares:", newSqArr);

// filter → keep nums > 10
let filtArr = [5, 12, 8, 20, 3];
let newFiltArr = filtArr.filter((val) => val > 10);
console.log("filter >10:", newFiltArr);

// reduce → sum
let sumArr = [13, 43, 6];
let newSumArr = sumArr.reduce((acc, val) => acc + val, 0);
console.log("reduce sum:", newSumArr);

// every → check if all even
let evenArr = [2, 4, 6, 8, 10];
let checkEvenArr = evenArr.every((val) => val % 2 === 0);
console.log("every even:", checkEvenArr);

// destructure → first and last name
let fullName = ["Rohan", "Singh"];
let [firstName, lastName] = fullName;
console.log("first:", firstName, "last:", lastName);

// merge arrays using spread
let a1 = [12, 43];
let b1 = [8, 4];
let c1 = [...a1, ...b1];
console.log("merged:", c1);

// add "India" at start using spread
let countries = ["Russia", "China"];
countries = ["India", ...countries];
console.log("countries:", countries);


// ======================================================
// ✅ SUMMARY
// - push/pop → end
// - shift/unshift → start
// - splice → add/remove at index
// - slice → copy portion (non-destructive)
// - reverse/sort → in-place changes
// - forEach/map/filter/reduce/find/some/every → iteration helpers
// - destructuring & spread → modern syntax sugar
// ======================================================
