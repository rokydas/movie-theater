fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))

const setPosts = (posts) => {
    const postContainer = document.getElementById("post-container")
    for (const post of posts) {
        const postDiv = document.createElement("div")
        postDiv.innerHTML = `
            <div class="post p-5 bg-light border border-primary border-3 m-3">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <p>Post no: ${post.id}</p>
            </div>
        `
        postContainer.appendChild(postDiv)
    }
}