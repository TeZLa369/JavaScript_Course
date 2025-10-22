//! EVENT Handling:
// ^ Things like moving the mouse pointer on the screen or clicking anywhere is an event. Handling these events is called event handling.
// ^ Event: Action
// ^ Event Listener: Reaction to the action

// & STEPS:
//? select the "element" first
//? realise what to do with the element: reaction hoga then I should give what reaction
let p = document.querySelector("p");
p.addEventListener("click", () => {
    p.style.color = "red";
})


p.addEventListener("dblclick", () => {
    p.style.fontSize = "19px"
})

p.addEventListener("copy", () => {
    p.textContent = "Text has been copied"
})

p.addEventListener("mouseenter", () => {
    p.textContent = "😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛😛"
})

p.addEventListener("mouseleave", () => {
    p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ipsum,reprehenderit minus incidunt error rem laboriosam praesentium molestias totam deleniti, sint maiores quibusdam cupiditate vel doloremque expedita aspernatur impedit est laborum voluptatem ipsa, ex numquam ab ? Ipsum tenetur facere unde.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Eveniet iste sapiente dolorum asperiores, corrupti dolores voluptatum ex veniam rerum tempora aspernatur nobis illo alias! Sequi perspiciatis ad beatae facere et!"
})

let btn = document.querySelector("button")
btn.addEventListener("click", () => {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
})

document.querySelector("input").addEventListener("input", (val) => {
    if (val.data !== null) {
        console.log(val.data)
    }
});

// ! change event runs when any input, select, or any text area got some changes
let opSelect = document.querySelector("select");
opSelect.addEventListener("change", (val) => {
    document.querySelector("h3").textContent = `${val.target.value} Device Selected`;
    // console.log(val.target.value)
})

// ! Mouse over
document.querySelector
