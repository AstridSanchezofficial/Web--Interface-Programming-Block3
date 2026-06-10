export function createCard(tournament){
   
    return`
    <div id="tournament-card" class="card mb-5  p-3 bg-dark-subtle" >
        <h3 class="card-header" >${tournament.name}</h3>
        <div class="p-3">
            <p>Game: ${tournament.game}</p>
            <p>Entry fee: ${tournament.entryFee}</p>
            <p>Max players: ${tournament.maxPlayers}</p>
            <p> Registered players: ${tournament.registeredPlayers}</p>
            <p> Registered players: ${tournament.status}</p>
        </div>
        <button class="load-registrations btn  btn-primary btn-sm fs-5">Load registrations</button>
    </div> `
    
    
}

export function clearContent(section){
    section.textContent=""
}

export function styleTournamentSection(section){
    section.classList.add("container","d-flex", "justify-content-center","row-cols-4","flex-wrap","gap-4")
}

export function styleBtns(button1,button2){
  
    button1.classList.add("btn","btn-success","m-3")
    button2.classList.add("btn","btn-danger",)
}