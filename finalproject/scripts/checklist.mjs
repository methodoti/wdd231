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
// category Section to generate the output
const categorySection = document.querySelector("#category-section");

// const h2 = document.querySelector("h2");

// for the aircraft data global
let allAircraftData = [];

// function to initialize (need to be ASYNC to use AWAIT)
async function init() {
    // ask for the data and wait (AWAIT) for the delivery
    const aircrafts = await getChecklistData();
    // now, with the data returned, display on screen
    allAircraftData = aircrafts;
    console.log(allAircraftData);
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

    categorySection.innerHTML = ""; // clean the Section for not showing button repetitions.
    // console.log(this.textContent); // just to see if it works.


    if (aircraftSelected !== "") {
        // console.log(aircraftSelected);
        // ========== where the magic begins!!!! ========== 
        const plane = allAircraftData.find(p => p.aircraftId === aircraftSelected)
        // console.log(plane);
        
        let h2 = document.createElement("h2");
        h2.classList.add("aircraftName");
        h2.textContent = plane.aircraftName;
        

        let buttonResetAll = document.createElement("button");
        buttonResetAll.classList.add("resetAll");
        buttonResetAll.classList.add("buttons");
        buttonResetAll.classList.add("buttonsRounded");          
        buttonResetAll.textContent = "Reset All";

        buttonResetAll.addEventListener("click", () => { // add event listener to the current button
            // displayCourseDetails(filteredCourses[index])
            // console.log("teste de click Reset All Inicio");
            const checkedElements = document.querySelectorAll(".checked");
            checkedElements.forEach((element) => {
                element.classList.remove("checked");
            });
        });

        categorySection.appendChild(h2);
        categorySection.appendChild(buttonResetAll);
        
        
        plane.checklists.forEach((category) => {
            // console.log(category.categoryName);

            // ===== div categoryTitleDiv =====
            let divCategoryTitleDiv = document.createElement("div");
            // divCategoryTitleDiv.id = "category-title";
            divCategoryTitleDiv.classList.add("categoryTitleDiv", "cardTitle");
            divCategoryTitleDiv.setAttribute("arial-label", category.categoryName);

            let h3 = document.createElement("h3");
            h3.classList.add("cardTitle");
            h3.textContent = category.categoryName;

            let span = document.createElement("span");
            // span.id = "category-button";
            span.classList.add("categoryButton");

            divCategoryTitleDiv.addEventListener("click", () => {
                // console.log("clicquei no div");
                span.classList.toggle("show");
                divChecklistDiv.classList.toggle("show");
            })

            // ===== div divChecklistDiv =====
            let divChecklistDiv = document.createElement("div");
            divChecklistDiv.classList.add("checklistDiv", "cards");

            // let teste = document.createElement("p");
            // teste.textContent = "somente um teste";

            // === CATEGORY ===
            category.items.forEach((item) => {
                // console.log(item);
                switch (item.type) {
                    case "checkpoint":
                        // console.log("isto é um CHECKPOINT");
                        let divTypeCheckpoint = document.createElement("div");
                        divTypeCheckpoint.classList.add("checklistItem", "type-checkpoint")
                            let divCheck = document.createElement("div");
                            divCheck.classList.add("check");
                                let divCheckIcon = document.createElement("div");
                                divCheckIcon.classList.add("checkIcon");
                            divCheck.appendChild(divCheckIcon);
                            let divItem = document.createElement("div");
                            divItem.classList.add("item", "type-checkpoint");
                                // TASK
                               let spanTask = document.createElement("span");
                                spanTask.classList.add("task");
                                spanTask.textContent = item.task;
                                 // DOT
                                let divDot = document.createElement("div");
                                divDot.classList.add("dot");
                                // ACTION
                                let spanAction = document.createElement("span");
                                spanAction.classList.add("action");
                                spanAction.textContent = item.action;
                                
                            divItem.appendChild(spanTask);
                            divItem.appendChild(divDot);
                            divItem.appendChild(spanAction);
                        
                        divTypeCheckpoint.addEventListener("click", () => {
                            divCheckIcon.classList.toggle("checked");
                            divItem.classList.toggle("checked");
                            divDot.classList.toggle("checked");
                        })
                        
                        divTypeCheckpoint.appendChild(divCheck);
                        divTypeCheckpoint.appendChild(divItem);

                        divChecklistDiv.appendChild(divTypeCheckpoint);
                        break;
                    case "info": {
                        // console.log("isto é um INFO");
                        let divTypeInfo = document.createElement("div");
                        divTypeInfo.classList.add("checklistItem", "type-info");
                        let divCheck = document.createElement("div");
                        divCheck.classList.add("check");
                        let divCheckIcon = document.createElement("div");
                        divCheckIcon.classList.add("checkIcon");
                        divCheck.appendChild(divCheckIcon);
                        let divItem = document.createElement("div");
                        divItem.classList.add("item", "type-info");
                        // TASK
                        let spanTask = document.createElement("span");
                        spanTask.classList.add("task");
                        spanTask.textContent = item.task;
                        // DOT
                        let divDot = document.createElement("div");
                        divDot.classList.add("dot");
                        // ACTION
                        let spanAction = document.createElement("span");
                        spanAction.classList.add("action");
                        spanAction.textContent = item.action;
                                
                        divItem.appendChild(spanTask);
                        divItem.appendChild(divDot);
                        divItem.appendChild(spanAction);
                        
                        divTypeInfo.addEventListener("click", () => {
                            divCheckIcon.classList.toggle("checked");
                            divItem.classList.toggle("checked");
                            divDot.classList.toggle("checked");
                        })
                        
                        divTypeInfo.appendChild(divCheck);
                        divTypeInfo.appendChild(divItem);

                        divChecklistDiv.appendChild(divTypeInfo);

                        break;
                    }
                    case "subtitle": {
                        // console.log("isto é um SUBTITLE");
                        let divTypeSubtitle = document.createElement("div");
                        divTypeSubtitle.classList.add("checklistItem", "type-subtitle")
                            // let divCheck = document.createElement("div");
                            // divCheck.classList.add("check");
                            //     let divCheckIcon = document.createElement("div");
                            //     divCheckIcon.classList.add("checkIcon");
                            // divCheck.appendChild(divCheckIcon);
                            let divItem = document.createElement("div");
                            divItem.classList.add("item", "type-subtitle");
                                // TASK
                               let spanTask = document.createElement("span");
                                spanTask.classList.add("task");
                                spanTask.textContent = item.text;
                                 // DOT
                                // let divDot = document.createElement("div");
                                // divDot.classList.add("dot");
                                // ACTION
                                // let spanAction = document.createElement("span");
                                // spanAction.classList.add("action");
                                // spanAction.textContent = item.action;
                                
                            divItem.appendChild(spanTask);
                            // divItem.appendChild(divDot);
                            // divItem.appendChild(spanAction);
                        
                        // divTypeSubtitle.addEventListener("click", () => {
                        //     divCheckIcon.classList.toggle("checked");
                        //     divItem.classList.toggle("checked");
                        //     divDot.classList.toggle("checked");
                        // })
                        
                        // divTypeSubtitle.appendChild(divCheck);
                        divTypeSubtitle.appendChild(divItem);

                        divChecklistDiv.appendChild(divTypeSubtitle);
                        break;
                    }
                    case "sim-action": {
                        // console.log("isto é um SIM-ACTION");
                        let divTypeSimAction = document.createElement("div");
                        divTypeSimAction.classList.add("checklistItem", "type-sim-action")
                            let divCheck = document.createElement("div");
                            divCheck.classList.add("check");
                                let divCheckIcon = document.createElement("div");
                                divCheckIcon.classList.add("checkIcon");
                            divCheck.appendChild(divCheckIcon);
                            let divItem = document.createElement("div");
                            divItem.classList.add("item", "type-sim-action");
                                // TASK
                               let spanTask = document.createElement("span");
                                spanTask.classList.add("task");
                                spanTask.textContent = item.task;
                                 // DOT
                                // let divDot = document.createElement("div");
                                // divDot.classList.add("dot");
                                // ACTION
                                // let spanAction = document.createElement("span");
                                // spanAction.classList.add("action");
                                // spanAction.textContent = item.action;
                                
                            divItem.appendChild(spanTask);
                            // divItem.appendChild(divDot);
                            // divItem.appendChild(spanAction);
                        
                        divTypeSimAction.addEventListener("click", () => {
                            divCheckIcon.classList.toggle("checked");
                            divItem.classList.toggle("checked");
                            // divDot.classList.toggle("checked");
                        })
                        
                        divTypeSimAction.appendChild(divCheck);
                        divTypeSimAction.appendChild(divItem);

                        divChecklistDiv.appendChild(divTypeSimAction);
                        break;
                    }
                    case "atc": {
                        // console.log("isto é um ATC");
                        let divTypeCheckpoint = document.createElement("div");
                        divTypeCheckpoint.classList.add("checklistItem", "type-checkpoint");
                            let divCheck = document.createElement("div");
                            divCheck.classList.add("check");
                                let divCheckIcon = document.createElement("div");
                                divCheckIcon.classList.add("checkIcon");
                            divCheck.appendChild(divCheckIcon);
                            let divItem = document.createElement("div");
                            divItem.classList.add("item", "type-checkpoint", "type-atc");
                                // TASK
                               let spanTask = document.createElement("span");
                                spanTask.classList.add("task");
                                spanTask.textContent = item.task;
                                 // DOT
                                let divDot = document.createElement("div");
                                divDot.classList.add("dot");
                                // ACTION
                                let spanAction = document.createElement("span");
                                spanAction.classList.add("action");
                                spanAction.textContent = item.action;
                                
                            divItem.appendChild(spanTask);
                            divItem.appendChild(divDot);
                            divItem.appendChild(spanAction);
                        
                        divTypeCheckpoint.addEventListener("click", () => {
                            divCheckIcon.classList.toggle("checked");
                            divItem.classList.toggle("checked");
                            divDot.classList.toggle("checked");
                        })
                        
                        divTypeCheckpoint.appendChild(divCheck);
                        divTypeCheckpoint.appendChild(divItem);

                        divChecklistDiv.appendChild(divTypeCheckpoint);
                        break;
                    }
                
                    default:
                        break;
                }

            });



            // divChecklistDiv.appendChild(divTypeCheckpoint);
            
            // let teste = document.createElement("p");
            // teste.textContent = "somente um teste";
            // divChecklistDiv.appendChild(teste);

            // RESET BUTTON INSIDE CHECKLIST DIV
            let resetDiv = document.createElement("div");
            resetDiv.classList.add("resetDiv");
            let buttonReset = document.createElement("button");
            buttonReset.classList.add("reset", "buttons", "buttonsRounded");
            buttonReset.textContent = "Reset";

            buttonReset.addEventListener("click", () => { // add event listener to the current button
                
                // look for checked only on div
                const checkedElements = divChecklistDiv.querySelectorAll(".checked");
                checkedElements.forEach((element) => {
                    element.classList.remove("checked");
                });
            });

            resetDiv.appendChild(buttonReset);
            divChecklistDiv.appendChild(resetDiv);

            // span.addEventListener("click", () => { // add event listener to the current button
            //     // displayCourseDetails(filteredCourses[index])
            //     console.log("teste de click Reset All");
            // });


            // add items to div categoryTitleDiv
            // TITLE AND OPEN CLOSE BUTTON
            divCategoryTitleDiv.appendChild(h3);
            divCategoryTitleDiv.appendChild(span);
            // divCategoryTitleDiv.appendChild(divChecklistDiv);



            categorySection.appendChild(divCategoryTitleDiv);
            categorySection.appendChild(divChecklistDiv);



            // let h2 = document.createElement("h2");
            // h2.classList.add("aircraftName");
            // h2.textContent = plane.aircraftName;



            
            
        });

        let buttonResetAllFinal = document.createElement("button");
        buttonResetAllFinal.classList.add("resetAll", "buttons", "buttonsRounded");          
        buttonResetAllFinal.textContent = "Reset All";

        buttonResetAllFinal.addEventListener("click", () => { // add event listener to the current button
            // displayCourseDetails(filteredCourses[index])
            // console.log("teste de click Reset All FINAL");
            // look for checked on all page
            const checkedElements = document.querySelectorAll(".checked");
            checkedElements.forEach((element) => {
                element.classList.remove("checked");
            });
        });
        categorySection.appendChild(buttonResetAllFinal);

    } else {
        console.log("No plane selected");
        // h2.textContent = "No selection";
    }


});
 


// TEMP! TESTE DOS CHECKLISTS

// CATEGORY OPEN CLOSE
const categoryTitleDiv = document.querySelector("#category-title")
const categoryButton = document.querySelector("#category-button");
const checklistDiv = document.querySelector("#checklist-div");



// Funcionou no teste
// categoryTitleDiv.addEventListener("click", () => {
//     categoryButton.classList.toggle("show");
//     checklistDiv.classList.toggle("show");
// })



// Funcionou no teste
// ITEM CHECKED
// const checklistItem = document.querySelector(".checklistItem")
// const checkIcon = document.querySelector(".checkIcon")
// const item = document.querySelector(".item");
// const dot = document.querySelector(".dot");

// checklistItem.addEventListener("click", () => {
//     checkIcon.classList.toggle("checked");
//     item.classList.toggle("checked");
//     dot.classList.toggle("checked");
// })