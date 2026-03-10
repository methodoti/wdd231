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

const button = document.querySelectorAll(".button-courses");
const numCredits = document.querySelector("#num-credits");


let courseToFilter = "All"
let filteredCourses = courses.filter(filterCourse);
button[0].classList.add("active");

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

function cardCourse() {
    const arraySubject = document.querySelector("#array-subject");
    arraySubject.innerHTML = "";
    
    const totalCredits = filteredCourses.reduce(function (acumulator, course) {
        return acumulator + course.credits;
    }, 0);

    for (let index = 0; index < filteredCourses.length; index++) {
        const element = filteredCourses[index].subject;

        const subjects = document.createElement("span");
        subjects.classList.add("subjectCards");
        if (filteredCourses[index].completed) {
                subjects.classList.add("subjectCompleted");
            subjects.textContent = `✓ ${filteredCourses[index].subject} ${filteredCourses[index].number}`;
            } else {
            subjects.textContent = `${filteredCourses[index].subject} ${filteredCourses[index].number}`;
            }
        arraySubject.append(subjects);
    }
    numCredits.textContent = `The total credits for course listed above is ${totalCredits}`;
}

function filterCourse(course) {
    if (courseToFilter === "All") {
        return courses;
    } else {
        return course.subject === courseToFilter;
    }
}