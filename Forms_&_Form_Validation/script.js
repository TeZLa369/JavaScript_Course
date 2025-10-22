let nm = document.querySelector("#name");
let form = document.querySelector("form");
let small = document.querySelector("small");
let email = document.querySelector("#email");
let emailSmall = document.querySelector("#emailSmall");
let passSmall = document.querySelector("#passSmall");
let passWord = document.querySelector("#password");

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (details) => {
    details.preventDefault();
    if (nm.value.length <= 2) {
        small.style.display = "initial";
    } else {
        small.style.display = "none";
    }

    if (!passwordRegex.test(passWord.value)) {
        passSmall.style.display = "initial"
    } else {
        passSmall.style.display = "none";
    }

    if (!emailRegex.test(email)) {
        emailSmall.style.display = "initial"
    }
    else {
        emailSmall.style.display = "none"

    }


})
