function getStudentData(){
    return new Promise ((resolve,reject)=>{
        const student= {id:1,
                        name:"Jorge Flores",
                        program:"Physics",
                        semester:"3rd",
                        bio:"Top student, has done a lot of voluntary work" };
        resolve(student);
    
    })

};

//Create function that is going to render the Student Info 
function renderStudent(student){
    //Change status on the dom
    const status= document.getElementById("status");
    status.innerHTML="Loading"
    //
    
    const student_section= document.getElementById("student-container");
    const info_student=document.createElement("p");
    info_student.textContent=`Student name :${student.name} , program: ${student.program} , Semester: ${student.semester} , Bio : ${student.bio}`;
    student_section.appendChild(info_student);
  

}

//Part 4 :Create a promise to Load Course Data

function getCourseData(){
    return new Promise((resolve,reject)=>{
        const courses=[{code:210, title:"Advanced Research "},
                    {code:220, title:"Calculus II"},
                    {code:230,title:"Advanced Chemestry"}]
        resolve(courses)
    })
};

//Part 5 Reder course Data
function renderCourses(courses){
    //Change status on the dom
    const status= document.getElementById("status");
    status.innerHTML="Loading"
    //
    const courseSection=document.getElementById("courses-container");
    const ul=document.createElement("ul");

    courses.forEach(course => {
        const li=document.createElement("li");
        li.textContent=`Code:${course["code"]}, Course name: ${course["title"]}`;
        ul.appendChild(li);
        
    });

    courseSection.appendChild(ul);

        
};


//TESTING STUDENT DATA AND CONNECTING BOTON

const student_btn=document.getElementById("load-student-btn");

student_btn.addEventListener("click", () => {
    getStudentData()
    .then((student)=>{
    renderStudent(student)
    });


});

//TESTING RENDER COURSES WHEN CLICKING BUTON TO LOAD COURSES

const load_btn=document.getElementById("load-courses-btn");

load_btn.addEventListener("click",()=>{

    getCourseData()
    .then((courses)=>{
        renderCourses(courses)
    });
  

});


//CLEAR BUTON

const clear_btn= document.getElementById("clear-btn");

clear_btn.addEventListener("click" , () =>{

    //Change status on the dom
    const status= document.getElementById("status");
    status.innerHTML="Ready"
    //

    //REMOVING CONTENT FORM THE DOM
    const student_container= document.getElementById("student-container");
    const course_container=document.getElementById("courses-container");


    //Creating loop

    while (student_container.firstChild){
        student_container.removeChild(student_container.firstElementChild)
    }

    while (course_container.firstChild){
        course_container.removeChild(course_container.firstElementChild)
    }


});


//Aqui result es lo que pasamos en resolve

//getStudentData()
// .then((result)=> {
//     console.log(result)
// }
// )

