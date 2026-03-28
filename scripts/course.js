const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const button = document.querySelectorAll(".button-courses"); // All | WDD | CSE
const numCredits = document.querySelector("#num-credits");   // the total credits for course listed
// for the DIALOG
const courseDetails = document.querySelector("#course-details");
const courseDetailsTitle = document.querySelector("#course-details h1");
const closeButton = document.querySelector("#closeModal");

// CLOSE EVENT LISTNER: it will be the only one for all modals
closeButton.addEventListener("click", () => {
    courseDetails.close();
});


let courseToFilter = "All"  // DEFAULT BUTTON SELECTION: in this first stage, the filterCourses will return All.
let filteredCourses = courses.filter(filterCourse); //  create filteredCourses array based on the couseToFilter variable, usig the callback function filterCourses()
button[0].classList.add("active");

// Call the cardCourse() function that will create all COURSES BUTTONS.
cardCourse();

for (let index = 0; index < button.length; index++) {
    const element = button[index];
    element.addEventListener("click", function () {
        switch (element.textContent) {
            case "All":
                courseToFilter = element.textContent;
                element.classList.add("active");
                button[1].classList.remove("active");
                button[2].classList.remove("active");
                filteredCourses = courses.filter(filterCourse);
                cardCourse();
                break;
            case "WDD":
                courseToFilter = element.textContent;
                element.classList.add("active");
                button[0].classList.remove("active");
                button[2].classList.remove("active");
                filteredCourses = courses.filter(filterCourse);
                cardCourse();
                break;
            case "CSE":
                courseToFilter = element.textContent;
                element.classList.add("active");
                button[0].classList.remove("active");
                button[1].classList.remove("active");   
                filteredCourses = courses.filter(filterCourse);
                cardCourse();
                break;
            default:
                break;
        }
    });
}

// Function responsible for the COURSES BUTTONS CREATION
function cardCourse() {
    const arraySubject = document.querySelector("#array-subject"); // grab the reference to the DIV on the COUSES BUTTONS AREA
    arraySubject.innerHTML = ""; // clean the DIV for not showing button repetitions.
    
    const totalCredits = filteredCourses.reduce(function (acumulator, course) { // sum the credits from the current element on the filteredCourses array
        return acumulator + course.credits;
    }, 0);

    console.log(filteredCourses); // just to see the filteredCourses array is ok

    for (let index = 0; index < filteredCourses.length; index++) {      // iterate on the filteredCourses elements

        console.log(filteredCourses[index]);  // just to see the filteredCourses current element

        //const element = filteredCourses[index].subject;  // takes the subject: CSE | WDD

        // const subjects = document.createElement("span");  // old way: span
        const subjectButton = document.createElement("button");  // new way: button, for the click event magic!
        subjectButton.classList.add("subjectCards");             // add the subjectCards class to the subjectButton for styling

        if (filteredCourses[index].completed) {         // check if the current course element is completed or not to add the '✓' simbole 
            subjectButton.classList.add("subjectCompleted");
            subjectButton.textContent = `✓ ${filteredCourses[index].subject} ${filteredCourses[index].number}`;
        } else {
            subjectButton.textContent = `${filteredCourses[index].subject} ${filteredCourses[index].number}`;
        }

        subjectButton.addEventListener("click", () => showStuff(filteredCourses[index]));
        
        arraySubject.append(subjectButton);  // add the subjectButton to the DIV on the COUSES BUTTONS AREA
    }
    numCredits.textContent = `The total credits for course listed above is ${totalCredits}`;  // display the total credits
}

// Function to filter the courses
function filterCourse(course) {
    if (courseToFilter === "All") { // if All, it returns the original courses array.
        return courses;
    } else {                       // else, it returns all courses with the subject = courseToFilter variable.
        return course.subject === courseToFilter;
    }
}

// for the DIALOG
function showStuff(element) {
    courseDetailsTitle.innerHTML = `${element.subject} ${element.number}`;
    courseDetails.showModal();
}