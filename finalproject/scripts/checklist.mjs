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
const testP = document.querySelector("#test");



// function to initialize (need to be ASYNC to use AWAIT)
async function init() {

    // ask for the data and wait (AWAIT) for the delivery
    const aircrafts = await getChecklistData();

    // now, with the data returned, display on screen
    displayChecklist(aircrafts);
}

init();

// if (getString !== "") {
//     aircraftSelector.value = mySelection.get("aircraftId");
//     aircraftSelector.dispatchEvent(new Event("change"));
//     console.log(mySelection.get("aircraftId"));
// }

// const file = "data/checklist.json";

// // console.log(file);

// const chooseDiv = document.querySelector("#choose-div");

// // alert("teste");


// async function getChecklistData() {
//     const response = await fetch(file);
//     const data = await response.json();
//     console.log(data.aircrafts);  //just to see the aircraft data
//     displayChecklist(data.aircrafts);
// }

// getChecklistData();

const displayChecklist = (aircrafts) => {
    aircrafts.forEach((plane) => {
        // console.log(plane);  //just to see individual plane

        const newOption = document.createElement("option");

        // displays on screen for the user
        newOption.textContent = plane.aircraftName;
        // used by the system on get
        newOption.value = plane.aircraftId;

        aircraftSelector.appendChild(newOption);



        // const div = document.createElement("div");
        // div.classList.add("buttons");

        // const p = document.createElement("p");
        // p.textContent = plane.aircraftName;

        // div.addEventListener("click", function () {
        //     console.log(plane.aircraftName);
        // })

        // div.appendChild(p);
        // chooseDiv.appendChild(div);
        
    });
    if (getString !== "") {
        aircraftSelector.value = mySelection.get("aircraftId");
        aircraftSelector.dispatchEvent(new Event("change"));
        // console.log(mySelection.get("aircraftId"));
    }
}

aircraftSelector.addEventListener("change", function () {
    const aircraftSelected = this.value;
    // console.log(this.value); // just to see if it works.

    if (aircraftSelected !== "") {
        console.log(aircraftSelected);
        testP.textContent = aircraftSelected; // where the magic begins!!!!

    } else {
        console.log("No plane selected");
        testP.textContent = "No selection";
    }


 });