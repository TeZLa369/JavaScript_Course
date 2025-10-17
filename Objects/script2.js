// ======================================================
// 📘 JavaScript Objects: Basics, Methods & Patterns
// ======================================================

// ------------------------------------------------------
// 1. Object Basics
// ------------------------------------------------------
// Objects store related information as key-value pairs.
// Keys are strings (or symbols), values can be any type.

let obj = {
    name: "Rohan",                 // string
    age: 22,                       // number
    favFood: "Chicken biriyani",   // string
    sonNames: ["Harsh", "Karsh"],  // array
    vehicle: {                     // nested object
        car: {
            name: "i10",
            brand: "Hyundai",
            price: 500000
        },
        bike: {
            name: "DavidPutra 9000CC",
            brand: "Jack",
            price: 1000000000
        }
    },
    location: {
        lat: 23.2,
        lng: 77.6
    }
};

console.log("Full Object:", obj);

// Deep access
console.log("Car Name:", obj.vehicle.car.name);
console.log("Vehicle Object:", obj["vehicle"]);
console.log("Car Object:", obj["vehicle"]["car"]);

// Dot vs Bracket notation
let a = "favFood";
console.log("Wrong:", obj.a);   // ❌ undefined (looks for key literally named "a")
console.log("Correct:", obj[a]); // ✅ dynamic key access

// Object destructuring
let { lat, lng } = obj.location;
console.log("Lat:", lat, "Lng:", lng);


// ------------------------------------------------------
// 2. Iterating Objects
// ------------------------------------------------------
console.log("\n****** FOR IN LOOP ******");
for (let key in obj) {
    console.log(`Key: ${key} --- Value: ${obj[key]}`);
}

// Object.keys() → array of keys
console.log("Keys Array:", Object.keys(obj));

// Object.entries() → array of [key, value] pairs
console.log("Entries Array:", Object.entries(obj));


// ------------------------------------------------------
// 3. Copying Objects
// ------------------------------------------------------
// Spread operator (shallow copy)
// ⚠️ Nested objects are still referenced
let obj2 = { ...obj };
console.log("\nSpread Copy:", obj2);

// Object.assign() (also shallow copy)
let obj3 = Object.assign({ homeTown: "Italy" }, obj);
console.log("Assign Copy:", obj3);

// JSON stringify + parse → deep clone
let objCopy = JSON.parse(JSON.stringify(obj));
console.log("Deep Clone:", objCopy);


// ------------------------------------------------------
// 4. Stringify & Parse
// ------------------------------------------------------
// Convert object → string (useful for storage, APIs)
let stringObj = JSON.stringify(obj);
console.log("\nStringify:", stringObj);

// Convert string → object
console.log("Parse:", JSON.parse(stringObj));


// ------------------------------------------------------
// 5. Optional Chaining
// ------------------------------------------------------
// Prevents runtime error if property doesn’t exist
// Instead of throwing error, returns undefined
console.log("Optional Chaining:", obj?.vehicles?.car); // undefined, no crash


// ------------------------------------------------------
// 6. Computed Properties
// ------------------------------------------------------
// Allows dynamic property names using variables
let key = "role";
let office = {
    name: "Rahul",
    age: 35,
    salary: 60000,
    [key]: "admin" // key becomes "role"
};
console.log("Office Object:", office);


// ------------------------------------------------------
// 7. Special Cases
// ------------------------------------------------------

// Destructure key with special characters
const user = {
    "first-name": "Kajal"
};
let { "first-name": firstName } = user;
console.log("Destructured first-name:", firstName);

// Object.entries() to print all key-value pairs
const course = {
    title: "JavaScript",
    duration: "4 weeks"
};

Object.entries(course).forEach(([k, v]) => {
    console.log(`${k}: ${v}`);
});


// ======================================================
// ✅ SUMMARY
// - Dot vs Bracket notation → bracket allows dynamic keys
// - Destructuring extracts values into variables
// - for...in, Object.keys(), Object.entries() → iteration
// - Spread / Object.assign → shallow copy
// - JSON stringify/parse → deep clone
// - Optional chaining → safe property access
// - Computed properties → dynamic keys
// - Special keys (with dashes/spaces) → must use quotes
// ======================================================


// ------------------------------------------------------
// 📊 Shallow vs Deep Copy (Quick Table)
// ------------------------------------------------------
/*
| Method                  | Type     | Nested Objects? |
|-------------------------|----------|-----------------|
| Spread {...obj}         | Shallow  | Referenced      |
| Object.assign({}, obj)  | Shallow  | Referenced      |
| JSON.parse(JSON.stringify(obj)) | Deep | Independent |
*/