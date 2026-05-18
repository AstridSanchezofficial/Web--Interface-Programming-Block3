const loadStudentBtn=document.getElementById("load-student-btn")
let loadingContainer=document.getElementById("container-loading")
let status=document.getElementById("status")
let spinner=document.getElementById("spinner")
let StudentInfo=document.getElementById("student-info")
let IndexStudent=0
loadStudentBtn.addEventListener("click", () =>{
    loadingContainer.classList.add("alert", "alert-success")
    status.textContent=" Loading... "
    spinner.classList.add("spinner-border")

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if (!response.ok){
                throw new Error ("Couldn't fetch ")
            }

            return response.json()
            

        }
        )
        .then((data)=>{
            setTimeout(()=>{
                status.textContent="Information loaded succesfully"
                spinner.classList.toggle("spinner-border")
                let students=data
                    if (IndexStudent >= students.length)
                    {                
                        IndexStudent=0
                        
                    }
                let student=students[IndexStudent]
                StudentInfo.innerHTML=`
                <br>
                <p ><strong>Name:</strong> ${student.name}</p>
                <p><strong>ID:</strong> ${student.id} </p>
                <p><strong> Username:</strong> ${student.username} </p>
                <p><strong>Email: </strong> ${student.email} </p>
                <p><strong> Phone:</strong> ${student.phone} </p>
                <p><strong>Address:</strong> <br>-street: ${student.address.street}<br>-suite: ${student.address.suite}<br>-city: ${student.address.city}<br>-zip code: ${student.address.zipcode}</p>
                <br>
                `
                IndexStudent+=1
                
            },2000)
        })
        .catch(error=>{
            status.textContent="An error occurred we couldn't load the student, try again"
            spinner.classList.remove("spinner-border")
            loadingContainer.classList.add("alert","alert-danger", "text-danger")
        })
})