const LoadUsersBtn=document.getElementById("load-users")
const ClearBtn=document.getElementById("clear-button")
let UsersContainer=document.getElementById("users-container")
let statusUsers=document.getElementById("status-users")
let Spinner=document.getElementById("spinner")
LoadUsers()
ClearUsers()
function LoadUsers(){
    LoadUsersBtn.addEventListener("click",()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            Spinner.classList.remove("d-none")
            statusUsers.textContent="Loading.."
            
            if (!response.ok){
                throw new Error ("We could not load the users this time,try again")
            }

            else{
                return response.json()
            }
        })
        .then((data)=>{
            setTimeout(()=>{
                let users=data
               
                statusUsers.textContent="Users loaded succesfully!!"
                Spinner.classList.add("d-none")

                users.slice(0,5).forEach((user)=> {
                    UsersContainer.innerHTML +=`
                    <div id="user" class="container  p-4 mx-3 bg-body-tertiary border border-primary-subtle rounded">
                        <p><strong>Name: </strong>${user.name}</p>
                        <p><strong>Email: </strong>${user.email}</p>
                        <p><strong>Phone: </strong>${user.phone}</p>
                        <p><strong>City: </strong>${user.address.city}</p>
                        <p><strong>Company Name:</strong>${user.company.name}</p>
                        <button class="btn btn-info text-light">Load posts</button>
                    </div>
                    `
                })
                
            },2000)

        })
        .catch(error=>{
            statusUsers.textContent="We could not access to the API, please check your connection!"
            Spinner.classList.add("d-none")
        })

        
    })
}

function ClearUsers(){
    ClearBtn.addEventListener("click",()=>{
        UsersContainer.textContent=""
        statusUsers.textContent="Ready!"
    })
}