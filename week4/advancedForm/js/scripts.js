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

const formFirstName = myInfo.get('first');
const formLastName = myInfo.get('last');
const formPhone = myInfo.get('phone');
const formEmail = myInfo.get('email');
const formOrdinance = myInfo.get('ordinance');
const formDate = myInfo.get('date');
const formLocation = myInfo.get('location');


document.querySelector("#results").innerHTML =`
    <p>Appointment for ${formFirstName} ${formLastName}</p>
    <p>Proxy ${formOrdinance} on ${formDate} in the ${formLocation}</p>
    <p>Your Phone: ${formPhone}</p>
    <p>Yout Email: ${formEmail}</p>
`;