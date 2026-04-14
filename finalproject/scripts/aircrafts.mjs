const file = "data/checklist.json";


export default async function getChecklistData() {
    const response = await fetch(file);
    const data = await response.json();
    // console.log(data.aircrafts);  //just to see the aircraft data
    // displayChecklist(data.aircrafts);
    return data.aircrafts;  //important to deliver the data! 
}

// getChecklistData(); // don't need to initialize here anymore.
