const tweeter = Tweeter();
const renderer = Renderer();

const posts = tweeter.getPosts();
renderer.renderPosts(posts);

function render() {
  renderer.renderPosts(tweeter.getPosts());
}

function post() {
  const input = $("#input");
  const postText = input.val();
  input.val("");
  tweeter.addPost(postText);
  render();
}

// Create event to delete post buttons
$("#posts").on("click", ".delete", function () {
  const postId = $(this).closest(".post").attr("id");
  tweeter.removePost(postId);
  render();
});

// Create event to add comment to a post
$("#posts").on("click", ".add-comment", function () {
  const input = $(this).siblings(".comment-input");
  const text = input.val();
  input.val("");
  const postId = $(this).closest(".post").attr("id");
  tweeter.addComment(postId, text);
  render();
});

// Create event to delete a comment of a post
$("#posts").on("click", ".delete-comment", function () {
  const postId = $(this).closest(".post").attr("id");
  const commentId = $(this).closest(".comment").attr("id");
  tweeter.removeComment(postId, commentId);
  render();
});
