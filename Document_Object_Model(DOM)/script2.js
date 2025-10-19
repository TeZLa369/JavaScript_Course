
// ! 🚀 DOM (Document Object Model) - MASTER NOTES
// The DOM is like a tree structure of your webpage that JavaScript can read, modify, or build upon.
// It allows JS to dynamically interact with HTML elements — changing text, styles, attributes, or even structure.

// ---------------------------------------------
// 🔹 SELECTING ELEMENTS
// ---------------------------------------------

let heyID = document.getElementById("heyID2");
console.dir(heyID);

let ask = document.getElementsByClassName("ask");
console.log(ask);

let h1 = document.querySelector("h1"); // selects first h1 tag
let h1All = document.querySelectorAll("h1"); // selects all h1 tags
console.log("querySelector:", h1);
console.dir("querySelectorAll:", h1All);

// ---------------------------------------------
// 🔹 MANIPULATING CONTENT
// ---------------------------------------------
h1.textContent = "This text has been changed!"; // changes text only (safe)
heyID.innerHTML = "<i>The inner HTML can be changed!</i>"; // allows HTML tags

// safer alternative if you want text only:
heyID.textContent = "Plain text only (no HTML tags)";

// ---------------------------------------------
// 🔹 ATTRIBUTE MANIPULATION
// ---------------------------------------------
let a = document.querySelector("a");
a.href = "https://www.google.com";

// OR using setAttribute()
let youtube = document.getElementById("youtube");
youtube.setAttribute("href", "https://www.youtube.com");

// Image manipulation
let img = document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?...");
img.setAttribute("height", 100);
img.setAttribute("width", 100);

// Get / Remove attributes
console.log(a.getAttribute("href"));
let facebook = document.getElementById("facebook");
facebook.removeAttribute("href");

// ---------------------------------------------
// 🔹 CREATING / ADDING / REMOVING ELEMENTS
// ---------------------------------------------
let h1New = document.createElement("h1");
h1New.textContent = "This is generated using JS";
document.body.prepend(h1New); // adds to top

let h3 = document.querySelector("h3");
h3.remove(); // removes element

let h4 = document.createElement("h4");
h4.textContent = "Created inside a div using JS";
document.querySelector("div").appendChild(h4); // adds to end of div

// Alternative methods:
div.insertAdjacentHTML("beforeend", "<p>Added using insertAdjacentHTML()</p>");
div.insertAdjacentHTML("afterbegin", "<p>Added to the top of div</p>");

// ---------------------------------------------
// 🔹 STYLING ELEMENTS
// ---------------------------------------------
h1.style.color = "grey";
h1.style.backgroundColor = "pink";
h1.style.cursor = "pointer";

// ---------------------------------------------
// 🔹 CLASS MANIPULATION
// ---------------------------------------------
let h1ID3 = document.getElementById("heyID3");
h1ID3.classList.add("design");

let h2 = document.querySelector("h2");
h2.classList.remove("ask");

let h1a = document.querySelector("#good");
h1a.classList.toggle("design"); // toggles on/off

// ---------------------------------------------
// 🔹 LOOPS & LIST EXAMPLES
// ---------------------------------------------
let lis = document.querySelectorAll("li");
lis.forEach(li => console.log(li.textContent));

for (let i = 0; i < lis.length; i++) {
    console.log(lis[i].textContent);
}

// Change a paragraph’s content
let para = document.querySelector("#changeP");
para.innerHTML = "<b>Updated</b> by JavaScript";

// Add title to div
let div = document.querySelector("div");
div.setAttribute("title", "This is the div.");

// Add a new list item
let ul = document.querySelector("ul");
let newli = document.createElement("li");
newli.textContent = "Created using JS";
ul.appendChild(newli);

// Add image at top of div
let divImg = document.querySelector("#imageDiv");
let imgInDiv = document.createElement("img");
imgInDiv.src = "https://images.unsplash.com/photo-1760715756584-9a88f2b272c6?...";
imgInDiv.height = 300;
imgInDiv.width = 300;
divImg.prepend(imgInDiv);

// Add highlight class to every even <li>
let evenLis = document.querySelectorAll("li:nth-child(2n)");
evenLis.forEach(li => li.classList.add("highlight"));

// Change font size of all paragraphs
document.querySelectorAll("p").forEach(p => {
    p.style.fontSize = "18px";
});

// ---------------------------------------------
// 🔹 EVENT LISTENERS
// ---------------------------------------------
// Event listeners make pages interactive

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    alert("Button clicked!");
});

h1.addEventListener("mouseover", () => {
    h1.style.color = "blue";
});

h1.addEventListener("mouseout", () => {
    h1.style.color = "grey";
});

// removing event listener example:
function greet() {
    console.log("Hi!");
}
btn.addEventListener("click", greet);
// later remove it
btn.removeEventListener("click", greet);

// ---------------------------------------------
// 🔹 ADVANCED DOM TIPS
// ---------------------------------------------
// Dataset - custom data attributes
// <button data-user-id="123">Click</button>
let btnUser = document.querySelector("button");
console.log(btnUser.dataset.userId); // "123"

// Clone a node
let cloned = h1.cloneNode(true);
document.body.appendChild(cloned);

// Create a text node
let textNode = document.createTextNode("This is a plain text node");
document.body.appendChild(textNode);
