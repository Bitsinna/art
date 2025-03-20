document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts');

    // Replace this URL with the raw.githubusercontent.com URL of your JSON file
    const jsonUrl = 'https://github.com/Bitsinna/art/blob/main/posts_1.json';

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                const postElement = createPostElement(post);
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

    function createPostElement(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        post.media.forEach(media => {
            const imgElement = document.createElement('img');
            imgElement.src = `https://raw.githubusercontent.com/Bitsinna/art/main/${media.uri}`;
            postElement.appendChild(imgElement);
        });

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title || 'Untitled Post';
        postElement.appendChild(titleElement);

        return postElement;
    }
});
