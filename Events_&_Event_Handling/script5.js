// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover", () => {
//     abcd.style.backgroundColor = "yellow";
// })
// abcd.addEventListener("mouseout", () => {
//     abcd.style.backgroundColor = "red";
// })

// ! event listner on the whole screen
let mousePoint = document.querySelector("#mousePoint");
window.addEventListener("mousemove", (details) => {
    console.log("X: ", details.clientX, "Y: ", details.clientY)

    mousePoint.style.top = details.clientY+"px";
    mousePoint.style.left = details.clientX + "px";

})