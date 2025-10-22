// ^ whenever we click or raise an event then the event flow happens in two phases:
// & 1. event goes from top level to bottom level
// & 2. event goes from bottom level to top level

// ^ and phase 1 happens initially

let btn = document.querySelector("#clckBtn");
let a = document.querySelector(".a")
let b = document.querySelector(".b")
let c = document.querySelector(".c")

btn.addEventListener("click", () => {
    console.log("Btn clicked");
})

a.addEventListener("click", () => {
    console.log("a clicked");
}, true) //! The true enables the capture phase => so 'a' event will run at the start when the btn is clicked
b.addEventListener("click", () => {
    console.log("b clicked");
})
c.addEventListener("click", () => {
    console.log("c clicked");
})


// ^ to count the number of texts in input
let input = document.querySelector("input");
let span = document.querySelector("span");
input.addEventListener("input", () => {
    console.log(input.value.length)
    let leftCnt = 20 - input.value.length;
    span.textContent = leftCnt;
    if (leftCnt <= 0) {
        span.style.color="red"
    }
    else {
        span.style.color = "white"
    }
})
