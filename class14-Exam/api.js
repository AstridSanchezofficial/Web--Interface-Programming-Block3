export function fetchTournaments(){
    return fetch ('./tournaments.json')
        .then((response)=>{
            if (!response.ok){
                throw new Error (`HTTP error ${response.status}`);
            }
            return response.json()
        });
        
}