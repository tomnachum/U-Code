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
          </div>
          `);
    _renderComments(comments, id);
  }

  function _renderComments(comments, postId) {
    for (const comment of comments) {
      $(`#${postId}>.comments`).append(`
              <p class="comment" id="${comment.d}">${comment.text}</p>
              `);
    }
  }

  return {
    renderPosts,
  };
}
