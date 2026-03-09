const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedSpan = document.querySelector("#lastModified");

const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

const lastModified = document.lastModified;
lastModifiedSpan.textContent = lastModified;
