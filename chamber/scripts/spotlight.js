const file = "data/members.json";

// const membersCard = document.querySelector(".members");
const spotlightCard = document.querySelector(".spotlight");

async function getMembersData() {
    const response = await fetch(file);
    const data = await response.json();
    // console.table(data.members);
    console.log(data.members);
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {

    const filteredMembers = members.filter(filterMembers);
    console.log(filteredMembers);

    function filterMembers(element) {
        return element.membershiplevel > 1;
    }

    for (let i = 0; i < 3; i++) {
        // const element = filteredMembers[i];
        const randomNumber = Math.floor(Math.random() * filteredMembers.length);
        // console.log(`length: ${filteredMembers.length}`);
        // console.log(`random: ${randomNumber}`);

        // ===> create the html elements here!
        console.log(filteredMembers[randomNumber].companyname);
        // display their *company name, *logo, *phone, *address, *website, and membership level

        let card = document.createElement("section");
        let divName = document.createElement("div");
        divName.classList.add("div-name");

        let companyName = document.createElement("h3");
        let membership = document.createElement("p");

        let divData = document.createElement("div");
        divData.classList.add("div-data");
        let divLogo = document.createElement("div");
        divLogo.classList.add("div-logo");
        let divInfo = document.createElement("div");
        divInfo.classList.add("div-info");

        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");

        // 1=member 🪪
        // 2=silver 🥈 
        // 3=gold 🏆
        const memberLevel = ["🪪", "🥈", "🏆"];
        // Nível 3 (Gold): Cor #FFD700 (Dourado clássico)
        // Nível 2 (Silver): Cor #C0C0C0 (Prateado)
        // Nível 1 (Member/Bronze): Cor #CD7F32 (Bronze)


        companyName.textContent = filteredMembers[randomNumber].companyname;
        logo.setAttribute("src", filteredMembers[randomNumber].imagefilename);
        logo.setAttribute("alt", `${filteredMembers[randomNumber].companyname}'s Logo`);

        switch (filteredMembers[randomNumber].membershiplevel) {
            case 1:
                console.log("Member");
                membership.innerHTML = `${memberLevel[0]} Member`;
                membership.classList.add("member");
                break;
            case 2:
                console.log("Silver");
                membership.innerHTML = `${memberLevel[1]} Silver`;
                membership.classList.add("silver");
                break;
            case 3:
                console.log("Gold");
                membership.innerHTML = `${memberLevel[2]} Gold`;
                membership.classList.add("gold");
                break;
            default:
                break;
        }

        address.textContent = filteredMembers[randomNumber].companyaddresses;
        phone.textContent = filteredMembers[randomNumber].companyphonenumber;

        url.innerHTML = filteredMembers[randomNumber].companywebsiteurl;
        url.setAttribute("href", `https://${filteredMembers[randomNumber].companywebsiteurl}`);
        url.setAttribute("target", "_blank");

        // ===> delete the member used to not repeat it again
        filteredMembers.splice(randomNumber, 1);
        console.log(filteredMembers);

        // ===> add the elements to the card
        divName.appendChild(companyName);
        divName.appendChild(membership);

        divLogo.appendChild(logo);
        divInfo.appendChild(address);
        divInfo.appendChild(phone);
        divInfo.appendChild(url);

        divData.appendChild(divLogo);
        divData.appendChild(divInfo);

        card.appendChild(divName);

        card.appendChild(divData);
        // card.appendChild(companyName);

        // ===> add the card to the page
        spotlightCard.append(card);
    }
}