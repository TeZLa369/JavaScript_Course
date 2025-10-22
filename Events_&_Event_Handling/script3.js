let inputBtn = document.querySelector("#btn");
let input = document.querySelector("#realIn")

inputBtn.addEventListener("click", () => {
    input.click();
})
input.addEventListener("change", (details) => {
    let name = (details?.target?.files[0]?.name)
    //^ another way for file name: console.log(name.replace("C:\\fakepath\\", ""));

    inputBtn.textContent = name+" selected";


})