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
        
        console.log("everything okay");
        status.textContent = "Tournaments loaded!";
     
        tournaments=data.map(t=> new Tournament(
            t.id,
            t.name,
            t.game,
            t.entryFee,
            t.maxPlayers,
            t.registeredPlayers,
            t.status
        ))
       
        const cards=tournaments.map(tournament=> createCard(tournament));
        tournamentsSection.innerHTML= cards.join("")
        
        

    })
    .catch((error) => {
        status.textContent = `Failed to load Tournaments: ${error.message}`;
    });
});