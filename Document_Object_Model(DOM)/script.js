// ! NEED TO KNOW in HTML
// ^ select an element in html
// ^ change a text
// ^ change html
// ^ change css
// ^ attribute
// ^ event listners

//& The DOM(Document Object Model) is like a blueprint of your webpage that JavaScript can play with. Imagine your HTML as a tree of elements—headings, buttons, images, etc.—and the DOM lets JS poke, change, or add branches to that tree.Want to hide a button, change some text, or add a new section ? DOM’s your go - to buddy for that. It’s how JS talks to your webpage and makes it interactive.

let heyID = document.getElementById("heyID2");
console.dir(heyID);

let ask = document.getElementsByClassName("ask")
console.log(ask)

let h1 = document.querySelector("h1") //* it selects the very first h1 tag in html
console.log("query selector: ", h1)

let h1All = document.querySelectorAll("h1") //* it selects every h1 tag in html
console.dir("query selectorALL: ", h1All) //^ dir so that we can see the key value pairs of the tag

// ^ Manipulation in DOM is basically changing an elemnent in HTML.
h1.textContent = "This text has been changed!" //* h1 is an object

heyID.innerHTML = "<i>The inner HTML can be changed!</i>"
console.dir(heyID);

// ! ATTRIBUTE in html
// ^ <a href>, <html lang>, <meta name>.... here href, lang and names are attributes of html
// ! ATTRIBUTE MANIPULATION
let a = document.querySelector("a");
a.href = "https://www.google.com"
// ^OR
let youtube = document.getElementById("youtube");
youtube.setAttribute("href", "https://www.youtube.com")

// IMAGE
let img = document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764")
img.setAttribute("height", 100)
img.setAttribute("width", 100)

// ! GET ATTRIBUTE
console.log(a.getAttribute("href"))// ^ will print the value of href in console

// ! REMOVE ATTRIBUTE
let facebook = document.getElementById("facebook");
facebook.removeAttribute("href");

// ! DYNAMIC DOM
//^ Create element then Append/Prepend wherever the element is needed
//^ Append => after the script
//^ Prepend => before the script


let h1New = document.createElement("h1");
h1New.textContent = "This is generated using Js"
console.log(h1New)
document.querySelector("body").prepend(h1New);

// ! REMOVE CHILD
let h3 = document.querySelector("h3");
h3.remove();

//! APPEND CHILD
let h4 = document.createElement("h4");
h4.textContent = "This is created inside in div using Js";
document.querySelector("div").appendChild(h4)

// ! STYLE
h1.style.color = "grey";
h1.style.backgroundColor = "pink";
h1.style.cursor = "pointer";

//^ adding a class
let h1ID3 = document.getElementById("heyID3");
h1ID3.classList.add("design")

//^ removing a class
let h2 = document.querySelector("h2")
h2.classList.remove("ask")

//^ toogle a class
let h1a = document.querySelector("#good");
h1a.classList.toggle("design") //^ if class was already used then it will remove() otherwise it will add()


// ! EX:
// ^ Select all <li> elements and print their txt using a loop
let lis = document.querySelectorAll("li")
lis.forEach((val) => {
    console.log(val.textContent);
})
console.log("\nFOR LOOP")
// ^ OR:
for (let i = 0; i < lis.length; i++) {
    console.log(lis[i].textContent);

}
// ^ Change a paragraph with 
{/* <b>Updated</b> by JavaScript */ }
let para = document.querySelector("#changeP");
para.innerHTML = "<b>Updated</b> by JavaScript"

//^ Add title to div
let div = document.querySelector("div");
div.setAttribute("title", "This is the div.")

// ^ create a new list item and add <li>Created using Js</li> to the end of <ul>
let ul = document.querySelector("ul");
let newli = document.createElement("li");
newli.textContent = "Created using Js";
ul.appendChild(newli)

// ^ create a new image element with a placeholder source and add at the top of a div
let divImg = document.querySelector("#imageDiv");
let imgInDiv = document.createElement("img");
imgInDiv.src = "https://images.unsplash.com/photo-1760715756584-9a88f2b272c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
imgInDiv.height = 300
imgInDiv.width = 300
divImg.prepend(imgInDiv);

// ^ Add a highlight class to every even item in a list
let lisNew = document.querySelectorAll("li:nth-child(2n)")
lisNew.forEach((ele) => {
    ele.classList.add("highlight")
})

//^ Font size of all 'p' elements to 18px
let p = document.querySelectorAll("p");
p.forEach((elem) => {
    elem.style.fontSize="18px"
})




