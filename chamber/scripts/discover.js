import { interestItems } from "../data/interest-items.mjs";

// console.log(interestItems);

const itemCards = document.querySelector("#itemCards");

function displayItems(itemsArray) {
    itemsArray.forEach(element => {
        console.log(element);

        const title = document.createElement("h2");
        title.textContent = element.name;
        
        const figure = document.createElement("img");
        figure.src = `images/${element.photo_url}`;
        figure.alt = element.name;
        figure.id = "teste";

        const address = document.createElement("span");
        address.textContent = element.address;

        const paragraph = document.createElement("p");
        paragraph.textContent = element.description;


        const button = document.createElement("button");
        button.textContent = "Learn More";



        itemCards.appendChild(title);
        itemCards.appendChild(figure);
        itemCards.appendChild(address);
        itemCards.appendChild(paragraph);
        itemCards.appendChild(button);
    });

}

displayItems(interestItems);

// itemCards.innerHTML = `
//     <section>
//         <h2>Mario Quintana</h2>
//         <img src="images/mario-quintana.webp" alt="">
//         <span></span>
//         <p></p>
//         <button>learn more</button>
//     </section>
//     `;

