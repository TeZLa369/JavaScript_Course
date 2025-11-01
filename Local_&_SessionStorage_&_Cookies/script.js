// ! LOCAL Storage
// ^ Storing data inside the browser, which stays even after closing the browser.
localStorage.setItem("name", "Kuntal"); //& save and can be used to update

let val = localStorage.getItem("name"); //& retrive
console.log(val)

localStorage.setItem("name2", "Biraj")
localStorage.removeItem("name2")


// ^ Saves only string so we have to convert other data types into string before saving
// Ex:
localStorage.setItem("arrayName", JSON.stringify(['Kuntal', 'Biraj', 'Abhijit']));

// ^ So to use it back as the original Array form we have to use JSON.parse('whatever the output of localStorage.getItem')


// ! sessionStorage
// ^ Temporarily stores data until the tab is closed
// & console mein likho: sessionStorage.setItem("nameSession","Abhijit");


// ! COOKIES
// ^ small data is stored in browser's cookies named property. Its for low or light data.
// ^ The data stored in cookies will go to the server automatically when the page is reloaded
// & can store about ~4kb
// ^ but localStorage and sessionStorage can store about ~5mb
document.cookie = "age=26" // since its written  




