//! Our job:
//& Show each user
//& filter everytime when input
//& show filtered users


let users = [
    {
        name: "Priya Sharma",
        pic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        bio: "Designer from Mumbai who loves travel, coffee and sketching cityscapes."
    },
    {
        name: "Arjun Mehta",
        pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        bio: "Full-stack developer based in Bengaluru. Coding by day, gamer by night."
    },
    {
        name: "Neha Kapoor",
        pic: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        bio: "Yoga instructor & wellness blogger from Goa. Passionate about mindfulness & nature."
    },
    {
        name: "Rohit Singh",
        pic: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        bio: "Marketing strategist in Delhi. Avid photographer chasing sunsets and city lights."
    },
    {
        name: "Anjali Roy",
        pic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        bio: "Content writer and poet from Kolkata. Words are my world."
    }
];

function showUsers(arr) {
    arr.forEach(user => {
        // Create the main container
        const cards = document.createElement("div");
        cards.classList.add("cards");

        // Create a single card
        const card = document.createElement("div");
        card.classList.add("card");

        // Create the image
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // Create the blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");

        // Create the content container
        const content = document.createElement("div");
        content.classList.add("content");

        // Create the heading
        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        // Create the paragraph
        const p = document.createElement("p");
        p.textContent = user.bio;

        // Append elements together
        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        cards.appendChild(card);

        // Finally append to body (or any target container)
        document.querySelector(".cards").appendChild(cards);

    });
}

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

let input = document.querySelector("input");

function search() {
    let query = input.value.toLowerCase();
    const newUsers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(query)
    })
    if (newUsers.length === 0) {
        alert("User doesn't exist!")
    } else {
        document.querySelector(".cards").innerHTML = "";
        showUsers(newUsers)
    }
}
const debounceSearch = debounce(search, 500);
input.addEventListener("input", debounceSearch)
showUsers(users);

