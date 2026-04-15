// import the data
import getChecklistData from "./aircrafts.mjs";
//console.log(getChecklistData); // just to see if it worked

const chooseDiv = document.querySelector("#choose-div");

// function to initialize (need to be ASYNC to use AWAIT)
async function init() {

    // ask for the data and wait (AWAIT) for the delivery
    const aircrafts = await getChecklistData();

    // now, with the data returned, display on screen
    displayChecklist(aircrafts);
}

init();

const displayChecklist = (aircrafts) => {
    aircrafts.forEach((plane) => {
        //console.log(plane);  //just to see individual plane, test to see if it works.
        // const div = document.createElement("div");
        // div.classList.add("buttons");
        const linkButton = document.createElement("a");
        linkButton.classList.add("buttons");
        linkButton.href = `./checklist.html?aircraftId=${plane.aircraftId}`;


        // button.textContent = plane.aircraftName;
        const p = document.createElement("p");
        p.textContent = plane.aircraftName;

        // linkButton.addEventListener("click", function () {
        //     console.log(plane.aircraftName);
        // })

        linkButton.appendChild(p);
        chooseDiv.appendChild(linkButton);
    });
}