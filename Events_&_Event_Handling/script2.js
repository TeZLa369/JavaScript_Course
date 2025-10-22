let h1 = document.querySelector("h1");
document.addEventListener("keydown", (val) => {
    if (val.key === " ") {
        h1.textContent = "space"
    } else {
        h1.textContent = val.key
    }

})