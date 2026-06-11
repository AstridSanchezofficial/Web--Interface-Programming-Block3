import { fetchRegistrations } from "./api.js";
export function getRegistrations(id){
    return fetchRegistrations()
    .then((data)=>{
     
    return data.filter(
        element=>element.tournamentId===Number(id)
    );
    
    })
    .catch((error)=>{
        console.log(error)
    })
    
}