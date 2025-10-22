//^ Have to prevent the form from reloading after clicking the submit button as it removes all the changes made using DOM
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")
let main = document.querySelector(".main");
form.addEventListener("submit", (details) => {
    details.preventDefault();



    let card = document.createElement("div");
    card.classList.add("card")

    let profile = document.createElement("div");
    profile.classList.add("profilePicture");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[2].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[0].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[1].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    let btn = document.createElement("button")
    btn.textContent = "open form";
    btn.type = "button";
    btn.classList.add("btnForm")

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    card.appendChild(btn);


    main.appendChild(card);
    form.classList.remove(".main");
    // form.classList.add(".rotateCard");
    form.style.display = "none";

    btn.addEventListener("click", () => {
        form.style.display = "flex";
        card.style.display = "none"
    })

    inputs.forEach((inp) => {
        if (inp.type !== "submit") {
            inp.value=""
        }
    })
})

// let btnForm = document.querySelector(".btnForm");
// let card = document.querySelector(".card");


