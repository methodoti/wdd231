import { interestItems } from "../data/interest-items.mjs";

// console.log(interestItems);

const itemCards = document.querySelector("#itemCards");
const lastVisit = document.querySelector(".lastVisit");

function displayItems(itemsArray) {
    itemsArray.forEach(element => {
        // console.log(element);

        const theCard = document.createElement("div");

        const title = document.createElement("h2");
        title.textContent = element.name;
        
        const figure = document.createElement("img");
        figure.src = `images/${element.photo_url}`;
        figure.alt = element.name;
        figure.width = 300;
        figure.height = 200;
        // console.log(element.name);
        if (element.name === "Parque Farroupilha (Redenção)") {
            // trying to fix the performance lighthouse
            figure.setAttribute("fetchpriority", "high");
        } else {
            figure.setAttribute("loading", "lazy");
        }
        // figure.setAttribute("loading", "lazy");
        
        const address = document.createElement("address");
        address.textContent = element.address;

        const paragraph = document.createElement("p");
        paragraph.textContent = element.description;


        const button = document.createElement("button");
        button.textContent = "Learn More";

        theCard.appendChild(title);
        theCard.appendChild(figure);
        theCard.appendChild(address);
        theCard.appendChild(paragraph);
        theCard.appendChild(button);

        itemCards.appendChild(theCard);
    });

}

displayItems(interestItems);

// visit date code


// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;
// find difference between epoch times in ms and convert to days
// let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

const theDateToday = new Date();
const theLastVisit = Number(localStorage.getItem("lastVisit"));
// console.log(theLastVisit);
// let daysFromVisit = (theDateToday.getTime() - theLastVisit + (86400000 * 3)) / msToDays;
let daysFromVisit = (theDateToday.getTime() - theLastVisit) / msToDays;
let plural = ""
if (daysFromVisit.toFixed(0) > 1) {
    plural = "s";
}

// console.log(daysFromVisit);


if (theLastVisit === 0) {
    // console.log("é null!");
    lastVisit.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysFromVisit < 1) {
    lastVisit.textContent = "Back so soon! Awesome!"
} else if (daysFromVisit >= 1) {
    // console.log(daysFromVisit);    
    lastVisit.textContent = `You last visited ${daysFromVisit.toFixed(0)} day${plural} ago.`;
}

localStorage.setItem("lastVisit", Date.now());

// console.log(theLastVisit);


// localStorage.setItem("lastVisit", Date.now());
// console.log(localStorage.getItem("lastVisit"));



// lastVisit.textContent = new Date().toLocaleString();




// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
// const msToDays = 86400000;
// today's date
// const theDateToday = new Date();

// initialize display elements
// const todayElement = document.querySelector("#today");
// const christmasElement = document.querySelector("#christmas");
// const christmasDateElement = document.querySelector("#christmasDate");
// const daysElement = document.querySelector("#daysleft");

// processing
// const today = Date.now();
// const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// check if is the waing days of December, if so ... change to next year.
// if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
// 	christmasDate.setFullYear(christmasDate.getFullYear() + 1);
// }
// find difference between epoch times in ms and convert to days
// let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

// todayElement.textContent = today;
// christmasElement.textContent = christmasDate.getTime();
// christmasDateElement.textContent = christmasDate;
// daysElement.textContent = `${daysleft.toFixed(0)} days`;

