//! if else else-if
let condition = false
let condition2 = false;
console.log("IF ELSE");
if (condition) {
    console.log("This will run if the condition is true")
} else if (condition && condition2) {
    console.log("This will run if the condition is true")
}
else {
    console.log("This will run if the condition is false")
}



function getGrade(score) {
    if (score < 0 || score > 100) { return "Invalid Marks" }
    else if (score >= 90) {
        return "A+";
    }
    else if (score >= 80) {
        return "A";
    }
    else if (score >= 70) {
        return "B";
    }
    else if (score >= 60) {
        return "C";
    }
    else if (score >= 33) {
        return "D";
    }
    else if (score >= 0) {
        return "Fail";
    }
}
console.log(getGrade(60));



// ^ ROCK PAPER SCISSOR

function rps(user, computer) {
    if (user === computer) return "draw";

    if (user === "rock" && computer === "scissor") return "User";
    if (user === "paper" && computer === "rock") return "User";
    if (user === "scissor" && computer === "paper") return "User";

    return "Computer";
}

console.log(rps("scissor", "rock"));


//! switch case
console.log("\nSWITCH");
let day = "wednesday"
switch (day) {
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is tuesday");
        break;
    case "wednesday":
        console.log("Today is wednesday");
        break;
    case "thursday":
        console.log("Today is thursday");
        break;
    default:
        console.log("Ajj ka din hi kharab hai BC!");
}

//! early return pattern
console.log("\nEarly Return");

function getVal(val) {
    if (val < 100) return "A";
    else if (val < 75) return "B";
    else if (val < 50) return "B";
    else return "D";
}
console.log(getVal(4)) // it will print "A" as the function gave the returned value starting mein hi

function getVal2(val) {
    if (val < 25) return "D";
    else if (val < 50) return "C";
    else if (val < 75) return "B";
    else return "A";
}
console.log(getVal2(45)) // it will print "A" as the function gave the returned value starting mein hi
