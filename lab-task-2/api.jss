$(document).ready(function() {
    // Fetch posts from JSONPlaceholder API
    $.get("https://jsonplaceholder.typicode.com/posts", function(posts) {
        // Display posts
        posts.forEach(function(post) {
            $("#posts").append("<div class='post'><h3>" + post.title + "</h3><p>" + post.body + "</p></div>");
        });
    });
});