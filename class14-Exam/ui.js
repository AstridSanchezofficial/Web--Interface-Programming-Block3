export function createCard(tournament){
   
    return`
    <div id="tournament-card" class="card mb-5  p-3 bg-dark" >
        <h3 class="card-header text-info" >${tournament.name}</h3>
        <div class="p-3 fs-6 text-white">
            <p><strong>Game:</strong> ${tournament.game}</p>
            <p>Entry fee: ${tournament.entryFee}</p>
            <p>Max players: ${tournament.maxPlayers}</p>
            <p>Registered players: ${tournament.registeredPlayers}</p>
            <p>Registered players: ${tournament.status}</p>
        </div>
        <button data-id="${tournament.id}"class="load-registrations btn  btn-primary btn-sm fs-5">Load registrations</button>
    </div> `
    
    
}

export function createRegistration(registration){
    return `
    <div id="registration-card" class="card p-3 fs-6 border border-info bg-info-subtle">
        <p class="fs-5"><strong>Player name:</strong> ${registration.playerName}</p>
        <p><strong>Gamer Tag:</strong> ${registration.gamerTag}</p>
        <p><strong>Ticket type:</strong> ${registration.ticketType}</p>
        <p><strong>Registration status:</strong> ${registration.status}</p>
    </div>
    `
}

export function clearContent(section){
    section.textContent=""
}

export function styleTournamentSection(section){
    section.classList.add("d-flex","mt-5", "justify-content-center","row-cols-4","flex-wrap","gap-4")
}

export function styleBtns(button1,button2){
  
    button1.classList.add("btn","btn-success")
    button2.classList.add("btn","btn-danger",)
}

export function styleRegistrationSection(section){
    section.classList.add("d-flex","gap-4")
}

