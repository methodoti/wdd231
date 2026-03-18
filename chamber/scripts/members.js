const file = "data/members.json";

const membersCard = document.querySelector(".members");

async function getMembersData() {
    const response = await fetch(file);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((members) => {
        // console.log(members.companywebsiteurl); 
        // card build code goes here
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a")
        let companyName = document.createElement("h2");


        // build the h3 content out to show the member's company name
        companyName.textContent = members.companyname;

        // build the logo by setting all the relevant attributes
        logo.setAttribute("src", members.imagefilename);
        logo.setAttribute("alt", `${members.companyname}'s Logo`);
        logo.setAttribute("loading", "lazy");

        address.textContent = members.companyaddresses;

        phone.textContent = members.companyphonenumber;

        url.innerHTML = members.companywebsiteurl;
        url.setAttribute("href", `https://${members.companywebsiteurl}`);
        url.setAttribute("target", "_blank");



        // append the section with the created elements
        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        

        membersCard.appendChild(card);


    });
}




// https://codepen.io/BYU-Idaho/pen/RNbpbNe

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}