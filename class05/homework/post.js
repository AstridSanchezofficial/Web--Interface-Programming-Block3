const LoadingButton=document.getElementById("button")
let OutputContainer=document.getElementById("output-container")
let statusMessage=document.getElementById("status")
let postContainer=document.getElementById("post")

LoadingButton.addEventListener("click",()=>{
    statusMessage.textContent="Loading.."
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) =>{
        if (!response.ok){
            throw new Error ("We could not display the user")

        }
        else{
            return response.json()
        }
    })
    .then((data)=>{
        
        statusMessage.classList.add("text-success")
        
        setTimeout(()=>{
            //Changing the status 
            statusMessage.textContent="Post loaded succesfully!"
            postContainer.innerHTML=`
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Body: </strong>${data.body}</p>
            `

        },2000)
    })
    .catch(error=>{
        statusMessage.textContent="An error ocurred, please try again "
        statusMessage.classList.add("text-danger")
        OutputContainer.classList.add("bg-danger-subtle")
    })
    postContainer.textContent=""
})