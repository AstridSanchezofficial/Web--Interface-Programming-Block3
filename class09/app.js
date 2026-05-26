// The purpose of this file is to connect everything
import {fetchUsers} from "./api.js"
import {renderUsers} from "./ui.js"
import {clearUsers} from "./ui.js"
import { containerAppearance } from "./ui.js"
import { buttonsAppearance } from "./ui.js"

const loadUsersBtn=document.getElementById("load-users-btn")
const status= document.getElementById("status")
const usersContainer=document.getElementById("users-container")
const clearUsersBtn=document.getElementById("clear-btn")

buttonsAppearance(loadUsersBtn,clearUsersBtn)
loadUsersBtn.addEventListener("click",()=>{
    status.textContent="Loading Users"

    fetchUsers()
    .then((users)=>{
        
        renderUsers(users,usersContainer);
        containerAppearance(usersContainer)
        status.textContent="Users loaded successfully";
   
    })
    .catch((error)=>{
        status.textContent=`Failed to load the users: ${error.message}`;

    });
});

clearUsersBtn.addEventListener("click",()=>{
    clearUsers(usersContainer)
    
    status.textContent="Click the button to load users"
})

