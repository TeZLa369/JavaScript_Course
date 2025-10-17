// ^ Use to store multiple values
// ^ Values can be of multiple types in Js but not in other languages
let marks = [1, 2, 3, 4, 5];
console.log(marks)
// * Update:
marks[3] = 43;
console.log(marks)

marks.push(323); //adds value to the last index
console.log(marks);

marks.pop();//removes value from the last index
console.log(marks);

marks.shift();//removes value from the first index
console.log(marks);

marks.unshift(99);//adds value to the first index
console.log(marks);

marks.splice(1, 3); // removes 3 values from index 2. Changes the actual array
console.log(marks)

marks.push(21, 43, 25, 6);
console.log(marks)

let newArr = marks.slice(0, 3); // returns a copy and doesn't change the original array. Copy array starts from 0th index to 2nd index, showing 3 values in total 
console.log(newArr)

newArr.reverse()
console.log(newArr);

let ass = newArr.sort(function (a, b) {
    return a - b; // ascending order
})
console.log(ass);

let des = newArr.sort(function (a, b) {
    return b - a; // descending order
})
console.log(des);


// ! FOR EACH
marks.forEach(function (val) { //* the function runs for each value in the array. The 'val' = each value, like val = marks[0] or val = marks[1]....
    //^to add 5 to every num:
    console.log(5 + val);

});

// ! MAP
let mapArr = marks.map(function (val) {
    return 6; //* The function will run for each value of marks array and will return 6 to a new blank array 'mapArr'. If nothing is returned, it will show undefined.
})
console.log(mapArr)

//! FILTER
let nums = [1, 2, 3, 4, 5, 6, 3, 7, 8]
let filArr = nums.filter(function (val) {
    if (val > 5) {
        return true; //* only the values satisfying the condition will get in the new array
    }
})
console.log(filArr);

//! REDUCE
//* it reduces the array into a single value.
let ans = nums.reduce(function (accumulator, val) {
    return accumulator + val; //^ the accumulator is defined as 0 here and it stores its previous value kind of like sum = sum + xyz, where sum's value gets accumulated
}, 0)
console.log(ans);

// ! FIND
let findArr = nums.find(function (val) {
    return val === 3; //* returns the first value which satisfies the condition
})
console.log(findArr)

// ! SOME
let someArr = nums.some(function (val) {
    return val > 4; //* checks if the condition is true or false for 'any' value in the given array
})
console.log(someArr);

// ! EVERY
let everyArr = nums.every(function (val) {
    return val > 4; //* checks if the condition is true or false for 'every' value in the given array
})
console.log(everyArr)

// ! Destructuring
let [a, b] = nums; //* a=nums[0], b=nums[1]. Values get copied according to their index.
let [c, d, , e] = nums; //* if one middle element is not required to copy
console.log(a, b, "\n", c, d, e);

// ! SPREAD OPERATOR
// * to copy an array to another array
let spreadArr = [...nums];
console.log(spreadArr)

//! EX:
// * Add "mango" at the end and "Pineapple" at the start
let fruits = ["Apple", "Banana"];
fruits.unshift("Mango");
fruits.push("Pineapple");
console.log(fruits);

// * Add "Red" and "Blue" at index 1
let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue"); //^ slice can be used to add also
console.log(colors);

// * Extract middle 3 elements:
let midArr = [1, 2, 3, 4, 5, 6]; //* will be extracting 3,4,5
let newMid = midArr.slice(2, 5);
console.log(newMid)

// * Sort alphabetically then reverse it
let names = ["Zabir", "Rosy", "Abhijit", "Kuntal", "Biraj"]
names.sort().reverse();
console.log(names);

// * use .map() to square each num
let sqArr = [1, 2, 3, 4];
let newSqArr = sqArr.map(function (val) {
    return val ** 2;
})
console.log(newSqArr);

// * .filter() to keep nums > 10
let filtArr = [5, 12, 8, 20, 3];
let newFiltArr = filtArr.filter((val) => {
    return val > 10;
})
console.log(newFiltArr);

// * .reduce() to find sum:
let sumArr = [13, 43, 6];
let newSumArr = sumArr.reduce((acc, val) => {
    return acc + val;
}, 0)
console.log(newSumArr);

// * use .every() to check if the every num is even
let evenArr = [2, 4, 6, 8, 10];
let checkEvenArr = evenArr.every((val) => {
    return val % 2 === 0;
})
console.log(checkEvenArr);

// * destructure to get first and last name
let fullName = ["Rohan", "Singh"];
let [firstName, lastName] = fullName;
console.log(firstName);
console.log(lastName);

// * merge using spread
let a1 = [12, 43];
let b1 = [8, 4];
let c1 = [...a1, ...b1];
console.log(c1)


// * Add "India" to the start using spread
let countries = ["Russia", "China"];
countries = ["India", ...countries];
console.log(countries);