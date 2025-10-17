// ! OBJECT
// * when you want to store info of similar kind or related to a single person or organisation 
let obj = {
    name: "Rohan", //* key: value
    age: 22,
    favFood: "Chicken biriyani",
    sonNames: ["Harsh", "Karsh"],
    vehicle: { //^ nested object
        car: {
            name: 'i10',
            brand: 'hyundai',
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

console.log(obj)
console.log(obj.vehicle.car.name) //^ deep access
console.log(obj['vehicle'])
console.log(obj['vehicle']['car'])


let a = "favFood";
console.log(obj.a) //^ its wrong
console.log(obj[a])

let { lat, lng } = obj.location; //^ to store values from objects in a variable. The name has to be the same
console.log(lat);
console.log(lng);


//! FOR IN LOOP
console.log("\n****** FOR IN LOOP ******")
for (let key in obj) {
    console.log(`Key: ${key} --- Value: ${obj[key]}`)
}


//* .keys()
console.log("Keys Array:", Object.keys(obj)); //^ returns an array of all the keys
//* .entries()
console.log("Entries Array:", Object.entries(obj)); //^ returns an array of arrays

//! SPREAD OPERATOR (copy) but the nested objects are referrenced, so changing the copied one will change the real one also
let obj2 = { ...obj };
console.log("\nSpread Operator: ", obj2)

//* .assign() (copy like spread, not that used nowadays)
let obj3 = Object.assign({ homeTown: "Italy" }, obj) //^ added new homeTown key and its value. Can be kept as blank as well
console.log("\nAssign: ", obj3)

//! Strinify and Parse
let stringObj = JSON.stringify(obj);
console.log("\nStrinify: ", stringObj); //^ converts the object to string
console.log("\nParse: ", JSON.parse(stringObj)) //^ again back to object

//! DEEP CLONE, used in nested objects
let objCopy = JSON.parse(JSON.stringify(obj)); // parsed the stringify
console.log("\nReal copy: ", objCopy)

// ! OPTIONAL CHAINING
// ^ if somehow the key name gets changed in the object and we haven't updated it while accessing then:
// * console.log(obj.vehicles.car); // like here it's 'vehicles' instead of 'vehicle', it will throw error
console.log("No Error: ", obj?.vehicles?.car); //^ it will simply show undefined, no error

// ! COMPUTED PROPERTIES
let key = "role"
let office = {
    name: "Rahul",
    age: 35,
    salary: 60000,
    [key]: "admin" //^ admin gets added
}
console.log(office)

//! EX:
// * Destructure the key: "first-name" as a var called firstName
const user = {
    "first-name": "Kajal"
}
let { "first-name": firstName } = user;
console.log(firstName);

// * Object.entries() to print all key-value pairs:
// title: JavaScript
// duration: 4 weeks
const course = {
    title: "JavaScript",
    duration: "4 weeks"
};

Object.entries(course).forEach((val) => {
    console.log(val[0] + " : " + val[1]);
})

