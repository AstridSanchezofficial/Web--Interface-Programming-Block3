import { fetchTournaments,fetchRegistrations } from "./api.js";
import { Tournament } from "./tournament.js";
import {clearContent,createCard,styleTournamentSection,styleBtns} from "./ui.js";

const loadBtn = document.getElementById("load-btn");
const status = document.getElementById("status");
const tournamentsSection=document.getElementById("tournaments-container")
const clearBtn=document.getElementById("clear-btn")
const registrationsBtn= document.getElementsByClassName("load-registrations")
const registrationStatus=document.getElementById("registration-status")

let tournaments=[]

styleBtns(loadBtn,clearBtn)
loadBtn.addEventListener("click", () => {
    status.textContent = "Loading...";

    fetchTournaments()
    .then((data) => {

     
        tournaments=data.map(t=>Tournament.fromObject(t));
       
        const cards=tournaments.map(tournament=> createCard(tournament));
        styleTournamentSection(tournamentsSection)
        tournamentsSection.innerHTML= cards.join("")
        
        status.textContent = "Tournaments loaded!";
        
        

    })
    .catch((error) => {
        status.textContent = `Failed to load Tournaments: ${error.message}`;
    })
   
});

clearBtn.addEventListener("click",()=>{
    clearContent(tournamentsSection)
    status.textContent="Click the button to load the tournaments"
})

registrations.loadBtn.addEventListener("click",()=>{
    registrationStatus.textContent="Loading registrations"
})