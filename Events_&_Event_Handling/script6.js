// ! EVENT Bubbling
// ^ If the listener is not present at the element in which the event has been occured then our event will look for listener in its parents. If still it did't get any, then it will keep moving to the top until it reaches the parent with a listener. Also the opposite of event bubbling is event capturing


document.querySelector("#nav") // ^ now even if I click on the button, the alert will still appear
    .addEventListener("click", () => {
        alert("clicked")
    })

// ! LINE Through
document.querySelector("ul").addEventListener("click", (details) => {
    details.target.classList.toggle("strikeLine")
})