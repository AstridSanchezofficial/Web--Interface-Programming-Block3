const loadPostBtn = document.getElementById("load-post-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");
const input=document.getElementById("post-id-input")


loadPostBtn.addEventListener("click", () => {
  const postId=Number(input.value)
  status.textContent = "Loading post...";
  output.innerHTML = "";

   try {
    validatePostId(postId);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((post) => {
        output.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        status.textContent = "Post loaded successfully.";
      })
      .catch((error) => {
        status.textContent = `Failed to load post: ${error.message}`;
      });

  } catch (error) {
    console.log(error.message);
  }
});



// Validating the id 

function validatePostId(id){
    if (typeof id != "number" || id<=0){
        throw new Error ("Post id must be a positive number ")
    }
}

// Testing it with try and catch 

// try{
//     validatePostId(-1)
// }
    
// catch (error){
//     console.log(error.message);
// }
// console.log(input)

// REquired Independant task 
