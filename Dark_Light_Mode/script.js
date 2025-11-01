
let btnToggle = document.querySelector("#btn");


function darkMode() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark")
        document.body.classList.remove("light");
        btnToggle.classList.add("btnDark")
    } else {
        document.body.classList.add("light");
        btnToggle.classList.add("btnLight")
        btnToggle.classList.remove("btnDark")
        document.body.classList.remove("dark");
    }
}

if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"));
    btnToggle.classList.add(localStorage.getItem("btnTheme"))
}
else {
    darkMode();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
    if (!localStorage.getItem("theme") && !localStorage.getItem("btnTheme")) {
        darkMode()
    }
});


btnToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        console.log("dark")
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        btnToggle.classList.remove("btnDark")
        btnToggle.classList.add("btnLight")

        localStorage.setItem("theme", "light")
        localStorage.setItem("btnTheme", "btnLight")

    }
    
    else {
        console.log("light")
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        btnToggle.classList.add("btnDark");
        btnToggle.classList.remove("btnLight")

        localStorage.setItem("theme", "dark")
        localStorage.setItem("btnTheme", "btnDark")
    }
})
