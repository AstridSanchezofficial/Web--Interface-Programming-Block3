import { fetchTournaments } from "./api.js";
import { Tournament } from "./tournament.js";
import { createCard } from "./ui.js";

const loadBtn = document.getElementById("load-btn");
const status = document.getElementById("status");
const tournamentsSection=document.getElementById("tournaments-container")
let tournaments=[]
loadBtn.addEventListener("click", () => {
    status.textContent = "Loading...";

    fetchTournaments()
    .then((data) => {

     
        tournaments=data.map(t=>Tournament.fromObject(t));
       
        const cards=tournaments.map(tournament=> createCard(tournament));
        tournamentsSection.innerHTML= cards.join("")
        status.textContent = "Tournaments loaded!";
        
        

    })
    .catch((error) => {
        status.textContent = `Failed to load Tournaments: ${error.message}`;
    });
});