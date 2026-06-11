import { fetchTournaments,fetchRegistrations } from "./api.js";
import { Tournament } from "./tournament.js";
import {clearContent,createCard,createRegistration,styleTournamentSection,styleBtns,styleRegistrationSection} from "./ui.js";
import { getRegistrations } from "./registration.js";


const loadBtn = document.getElementById("load-btn");
const status = document.getElementById("status");
const tournamentsSection=document.getElementById("tournaments-container")
const clearBtn=document.getElementById("clear-btn")
const registrationContainer=document.getElementById("registrations")
const registrationStatus=document.getElementById("registration-status")

let tournaments=[]

styleBtns(loadBtn,clearBtn)

loadBtn.addEventListener("click", () => {
    status.textContent = "Loading...";

    fetchTournaments()
    .then((data) => {

     
        const tournaments=data.map(t=>Tournament.fromObject(t));
       
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
    clearContent(registrationContainer)
    registrationStatus.textContent="No registrations yet"
})

tournamentsSection.addEventListener("click", (e) => {
    const button = e.target.closest(".load-registrations");

    if (!button) return;

    const tournamentId = button.dataset.id;

    getRegistrations(tournamentId)
    .then((registrations)=>{
        const cardsRegistrations=registrations.map(element=>createRegistration(element))
        registrationContainer.innerHTML=cardsRegistrations.join("")
        styleRegistrationSection(registrationContainer)
        registrationStatus.textContent="Registrations loaded succesfully"
    })
    .catch((error)=>{
        registrationStatus.textContent=`We could not load the registrations:${error.message}`
    })
    
});
