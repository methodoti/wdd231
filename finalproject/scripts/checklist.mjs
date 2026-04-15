// import the data
import getChecklistData from "./aircrafts.mjs";
//console.log(getChecklistData); // just to see if it worked

// get the string
const getString = window.location.search;
// console.log(getString);
const mySelection = new URLSearchParams(getString);
// console.log(mySelection);
// console.log(mySelection.get("aircraftId"));



const aircraftSelector = document.querySelector("#select-aircraft");
// const testP = document.querySelector("#test");
const h2 = document.querySelector("h2");



// function to initialize (need to be ASYNC to use AWAIT)
async function init() {
    // ask for the data and wait (AWAIT) for the delivery
    const aircrafts = await getChecklistData();
    // now, with the data returned, display on screen
    displayChecklist(aircrafts);
}

init(); // inicialize the imported data

const displayChecklist = (aircrafts) => {
    aircrafts.forEach((plane) => {
        // console.log(plane);  //just to see individual plane

        const newOption = document.createElement("option");

        // displays on screen for the user
        newOption.textContent = plane.aircraftName;
        // used by the system on get
        newOption.value = plane.aircraftId;

        aircraftSelector.appendChild(newOption);        
    });
    if (getString !== "") {
        aircraftSelector.value = mySelection.get("aircraftId");
        aircraftSelector.dispatchEvent(new Event("change"));
        // console.log(mySelection.get("aircraftId"));
    }
}

aircraftSelector.addEventListener("change", function () {
    const aircraftSelected = this.value;
    const aircraftName = this.value;
    console.log(this.textContent); // just to see if it works.


    if (aircraftSelected !== "") {
        console.log(aircraftSelected);
        // testP.textContent = aircraftSelected;
        // ========== where the magic begins!!!! ========== 
        h2.textContent = aircraftName;





    } else {
        console.log("No plane selected");
        testP.textContent = "No selection";
    }


});
 


// TEMP! TESTE DOS CHECKLISTS

// CATEGORY OPEN CLOSE
const categoryTitleDiv = document.querySelector("#category-title")
const categoryButton = document.querySelector("#category-button");
const checklistDiv = document.querySelector("#checklist-div");

// categoryButton.addEventListener("click", () => {
//     categoryButton.classList.toggle("show");
//     checklistDiv.classList.toggle("show");
// })

categoryTitleDiv.addEventListener("click", () => {
    categoryButton.classList.toggle("show");
    checklistDiv.classList.toggle("show");
})



// ITEM CHECKED
const checklistItem = document.querySelector(".checklistItem")
const checkIcon = document.querySelector(".checkIcon")
const item = document.querySelector(".item");
const dot = document.querySelector(".dot");

checklistItem.addEventListener("click", () => {
    checkIcon.classList.toggle("checked");
    item.classList.toggle("checked");
    dot.classList.toggle("checked");
})