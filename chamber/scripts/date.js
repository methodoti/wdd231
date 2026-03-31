const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedSpan = document.querySelector("#lastModified");

const currentYear = new Date().getFullYear();
currentYearSpan.textContent = new Date().getFullYear();

const lastModified = document.lastModified;
lastModifiedSpan.textContent = lastModified;

// to get the time of the page load on join.html timestamp hidden input
const timestamp = document.querySelector("#timestamp");
if (timestamp) {
    document.getElementById('timestamp').value = new Date().toISOString();
}

