const file = "data/members.json";

// const membersCard = document.querySelector(".members");
const spotlightCard = document.querySelector(".spotlight");

async function getMembersData() {
    const response = await fetch(file);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {

    
}