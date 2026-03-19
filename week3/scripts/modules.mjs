// its a default import, without { }
import byuiCourse from './course.mjs';
import { setSectionSelection } from './sections.mjs';
import { setTitle, renderSections } from './output.mjs';



// reduced to event listeners
document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    // Add renderSections(this.sections); to both event listeners in order 
    // to update the output after the enroll or drop button is clicked.
    renderSections(byuiCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    // Add renderSections(this.sections); to both event listeners in order 
    // to update the output after the enroll or drop button is clicked.
    renderSections(byuiCourse.sections);
});

// function calls
setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);