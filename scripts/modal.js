// alert("teste");

const courseDetails = document.querySelector("#course-details");
const buttonShow = document.querySelector("#array-subject");
const buttonClose = document.querySelector("#closeModal");


// console.log(buttonShow.children[0].innerHTML);

// buttonShow.addEventListener("click", function (e) {

//     const buttonInnerHTML = e.currentTarget.children[0].innerHTML;
//     console.log(buttonInnerHTML);

//     courseDetails.showModal();
// })

buttonClose.addEventListener("click", () => {
    courseDetails.close();
})
