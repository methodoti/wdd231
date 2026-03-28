import { temples } from "../data/templesData.js";
// console.log(temples);
import { url } from "../data/templesData.js";
// console.log(url);

//-------------  GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector("#showHere");
// GET A REFERENCE TO THE HTML DIALOG ELEMENT
const myDialog = document.querySelector("#mydialog");
const myTitle = document.querySelector("#mydialog h2");
const myInfo = document.querySelector("#mydialog p");
const myClose = document.querySelector("#mydialog button");

// CLOSE EVENT LISTNER: it will be the only one for all modals
myClose.addEventListener("click", () => {
    myDialog.close();
})

//------------- LOOP THROUGH THE ARRAY OF JSON ITEMS
// DISPLAY ALL THE TEMPLE PICTURES
function displayTemple(templesArray) { // 'templesArray' is the incoming variable from the temples array object
    console.log(templesArray);         // just a test to see if it works well
    templesArray.forEach(element => {  // the MAGIC! it will iterate though all the array with this build-in method
        console.log(element);          // just a test to see if it works, for individual itens this time
        const photo = document.createElement("img");  // create the photo
        photo.src = `${url}${element.path}`;
        photo.alt = element.name;

        // Add an event listener to each division on the page.
        photo.addEventListener("click", () => showStuff(element));

        showHere.appendChild(photo); // append the photo to the showHere div on the page. (with the event listener)
    });
}

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayTemple(temples); // send the temples information imported before

// POPULATE THE DIALOG WITH INFORMATION WHEN IMAGE IS CLICKED
function showStuff(element) {
    myTitle.innerHTML = element.name;
    myInfo.innerHTML = `Dedicated ${element.dedicated} by ${element.name} as temple ${element.number}`;
    myDialog.showModal();
} // end of function
