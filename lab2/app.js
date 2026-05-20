const LoadUsersBtn = document.getElementById("load-users");
const ClearBtn = document.getElementById("clear-button");

const UsersContainer = document.getElementById("users-container");

const statusUsers = document.getElementById("status-users");

const Spinner = document.getElementById("spinner");

LoadUsers();
ClearUsers();

function LoadUsers() {

    LoadUsersBtn.addEventListener("click", () => {

        Spinner.classList.remove("d-none");

        statusUsers.textContent = "Loading users...";

        fetch("https://jsonplaceholder.typicode.com/users")

        .then((response) => {

            if (!response.ok) {

                throw new Error(
                    "We could not load the users this time."
                );
            }

            return response.json();

        })

        .then((users) => {

            setTimeout(() => {

                Spinner.classList.add("d-none");

                statusUsers.textContent =
                    "Users loaded successfully!!";

                UsersContainer.innerHTML = "";

                users.slice(0,5).forEach((user) => {

                    UsersContainer.innerHTML += `

                    <div class="container p-4 my-3 mx-3 bg-body-tertiary border border-primary-subtle rounded">

                        <p>
                            <strong>Name:</strong>
                            ${user.name}
                        </p>

                        <p>
                            <strong>Email:</strong>
                            ${user.email}
                        </p>

                        <p>
                            <strong>Phone:</strong>
                            ${user.phone}
                        </p>

                        <p>
                            <strong>City:</strong>
                            ${user.address.city}
                        </p>

                        <p>
                            <strong>Company:</strong>
                            ${user.company.name}
                        </p>

                        <button
                            class="load-posts btn btn-info text-light"
                            data-userid="${user.id}">
                            Load Posts
                        </button>

                        <p class="status-posts mt-2"></p>

                        <div class="user-posts mt-3"></div>

                    </div>
                    `;
                });

                const LoadPostsBtns =
                    document.querySelectorAll(".load-posts");

                LoadPostsBtns.forEach((button) => {

                    button.addEventListener("click", () => {

                        const userId =
                            button.dataset.userid;

                        getUsersPosts(userId, button);

                    });

                });

            }, 2000);

        })

        .catch((error) => {

            Spinner.classList.add("d-none");

            statusUsers.textContent =
                "We could not access the API.";

            console.log(error);

        });

    });
}

function ClearUsers() {

    ClearBtn.addEventListener("click", () => {

        UsersContainer.innerHTML = "";

        statusUsers.textContent = "Ready!";

        Spinner.classList.add("d-none");

    });
}

function getUsersPosts(userId, button) {

    const StatusPosts =
        button.parentElement.querySelector(".status-posts");

    const UserPosts =
        button.parentElement.querySelector(".user-posts");

    StatusPosts.textContent = "Loading posts...";

    fetch("https://jsonplaceholder.typicode.com/posts")

    .then((response) => {

        if (!response.ok) {

            throw new Error(
                "We could not load posts."
            );
        }

        return response.json();

    })

    .then((posts) => {

        const filteredPosts = posts.filter((post) => {

            return post.userId == userId;

        });

        StatusPosts.textContent =
            "Posts loaded successfully!";

        UserPosts.innerHTML = "";

        filteredPosts.forEach((post) => {

            UserPosts.innerHTML += `

            <div class="border rounded p-3 my-2">

                <p>
                    <strong>Title:</strong>
                    ${post.title}
                </p>

                <p>
                    ${post.body}
                </p>

            </div>
            `;
        });

    })

    .catch((error) => {

        StatusPosts.textContent =
            "An error occurred loading posts.";

        console.log(error);

    });
}