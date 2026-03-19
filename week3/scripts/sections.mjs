//// function setSectionSelection() { // ===>>> don't need this anyomre, now it's a named export!
    // ===>>> moved this to export as a nemd export
//   const sectionSelect = document.querySelector("#sectionNumber");
//   byuiCourse.sections.forEach((section) => {
//     const option = document.createElement("option");
//     option.value = section.sectionNumber;
//     option.textContent = `${section.sectionNumber}`;
//     sectionSelect.appendChild(option);
//   });
//// }

export function setSectionSelection(sections) { 
    const sectionSelect = document.querySelector("#sectionNumber");
    byuiCourse.sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
 }