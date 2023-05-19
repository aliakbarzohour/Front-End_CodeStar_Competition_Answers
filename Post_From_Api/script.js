// Define an async function called getPosts
async function getPosts() {
    // Make a GET request to http://localhost:3000/posts using fetch
    fetch('http://localhost:3000/posts')
        // Convert the response to JSON format
        .then(response => response.json())
        // Once the data is received, loop through each post and create an HTML element for it
        .then(data => {
            data.forEach(post => {
                const postList = document.getElementById('post-list');
                const postItem = document.createElement('li');
                const postTitle = document.createElement('h3');
                const postBody = document.createElement('p');
                const postNumber = document.createElement('em');

                // Add the post title, body, and number to their respective HTML elements
                postTitle.innerText = post.title;
                postBody.innerText = post.body;
                postNumber.innerText = `شماره ${post.id}`;

                // Append the title, body, and number to the post item
                postItem.appendChild(postTitle);
                postItem.appendChild(postBody);
                postItem.appendChild(postNumber);

                // Append the post item to the list of posts
                postList.appendChild(postItem);
            });
        })
        // If there's an error, log it to the console
        .catch(error => console.error(error));
}

// Call the getPosts function when the page loads
getPosts();
