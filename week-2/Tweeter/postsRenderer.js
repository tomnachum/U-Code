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
              <p class="post-text">${text}</p>
              <div class="comments"></div>
              <button class="delete">X</button>
              <input type="text" placeholder="Write comment..." class="comment-input">
              <button class="add-comment">></button>
          </div>
          `);
    _renderComments(comments, id);
  }

  function _renderComments(comments, postId) {
    for (const comment of comments) {
      $(`#${postId}>.comments`).append(`
          <div class="comment" id="${comment.id}">
            <p>${comment.text}</p>
            <button class="delete-comment">X</button>
          </div>
          `);
    }
  }

  return {
    renderPosts,
  };
}
