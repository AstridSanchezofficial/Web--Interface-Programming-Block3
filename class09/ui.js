//THis file is responsible to render the UI 
export function renderUsers(users,container){
    container.innerHTML="";

    users.slice(0,5).forEach((user) => {
        const card= createCard(user)
        container.appendChild(card)

    }
)}

export function clearUsers (container){
    container.innerHTML="";
    
}

export function createCard(user){
    const article=document.createElement("article");
    //Adding Article 
    article.className=("card my-5 p-2 shadow-sm rounded col-md-3 border-info")

    article.innerHTML=
    `<h2 class="card-header bg-info text-light">${user.name}</h2>
    <p class="card-text pt-3 px-3"><strong>Email:</strong> ${user.email}</p>
    <p class="card-text pb-3 px-3"><strong>City:</strong> ${user.address.city}</p>
    `;

    return article
}