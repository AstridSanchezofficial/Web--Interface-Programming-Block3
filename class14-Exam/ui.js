export function createCard(tournament){
    return`
    <div id="tournament-card">
        <h3>${tournament.name}</h3>
        <p>Game: ${tournament.game}</p>
        <p>Entry fee: ${tournament.entryFee}</p>
        <p>Max players: ${tournament.maxPlayers}</p>
        <p> Registered players: ${tournament.registeredPlayers}</p>
        <p> Registered players: ${tournament.status}</p>
    </div>
    `
    
}