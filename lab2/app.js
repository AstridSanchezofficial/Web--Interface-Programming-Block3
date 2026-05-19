const LoadUsersBtn=document.getElementById("load-users")
const ClearBtn=document.getElementById("clear-button")
let UsersContainer=document.getElementById("users-container")
let statusUsers=document.getElementById("status-users")

LoadUsers()
ClearUsers()
function LoadUsers(){
    LoadUsersBtn.addEventListener("click",()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
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

                users.slice(0,5).forEach((user)=> {
                    UsersContainer.innerHTML +=`
                    <div id="user">
                        <p><strong>Name: </strong>${user.name}</p>
                        <p><strong>Email: </strong>${user.email}</p>
                        <p><strong>Phone: </strong>${user.phone}</p>
                        <p><strong>City: </strong>${user.address.city}</p>
                        <p><strong>Company Name:</strong>${user.company.name}</p>
                    </div>
                    `
                })
                
            },2000)

        })
        .catch(error=>{
            statusUsers.textContent="We could not access to the API, please check your connection!"
        })

        
    })
}

function ClearUsers(){
    ClearBtn.addEventListener("click",()=>{
        UsersContainer.textContent=""
        statusUsers.textContent="Ready!"
    })
}