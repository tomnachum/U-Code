function Renderer() {
  function renderPosts(posts) {
    $("#posts").empty();
    for (const post of posts) {
      _renderPost(post);
    }
  }

  function _renderPost(post) {
    const { text, id, comments } = post;
    $("#posts").append(`
          <div class="post" id="${id}">
            <button class="delete">X</button>
            <p class="post-text">${text}</p>
            <div class="comments"></div>
            <input type="text" placeholder="Write a comment..." class="comment-input">
            <button class="add-comment">Comment</button>
          </div>
          `);
    _renderComments(comments, id);
  }

  function _renderComments(comments, postId) {
    for (const comment of comments) {
      $(`#${postId}>.comments`).append(`
          <div class="comment" id="${comment.id}">
            <button class="delete-comment">X</button>
            <p class="text-comment">${comment.text}</p>
          </div>
          `);
    }
  }

  return {
    renderPosts,
  };
}
