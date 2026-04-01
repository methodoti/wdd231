const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(getString);

// console.log(myInfo);

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));


const firstName = myInfo.get("first-name");
const lastName = myInfo.get("last-name");
const email = myInfo.get("email");
const phone = myInfo.get("phone");
const organizationName = myInfo.get("organization-name");
const currentDate = myInfo.get("timestamp");
const dateObject = new Date(currentDate);
const formatedDate = dateObject.toLocaleString("en-US");

document.querySelector("#results").innerHTML =`
    <p>Name: <strong>${firstName} ${lastName}</strong></p>
    <p>Email: <strong>${email}</strong></p>
    <p>Phone Number: <strong>${phone}</strong></p>
    <p>Organization: <strong>${organizationName}</strong></p>
    <p>Current date: <strong>${formatedDate}</strong></p>    
`;