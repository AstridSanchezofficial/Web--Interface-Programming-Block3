// The purpose of this file is to connect everything
import {fetchUsers} from "./api.js"
import {renderUsers} from "./ui.js"

const loadUsersBtn=document.getElementById("load-users-btn")
const status= document.getElementsById("status")
const usersContainer=document.getElementById("users-container")


loadUsersBtn.addEventListener("click",()=>{
    status.textContent="Loading Users"

    fetchUsers()
    .then((users)=>{
        renderUsers(users,usersContainer);
        status.textContent="Users loaded successfully";
   
    })
    .catch((error)=>{
        status.textContent=`Failed to load the users: ${error.message}`;

    });
});