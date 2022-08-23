function Tweeter() {
  let _postsIdCounter = 0;
  let _commentsIdCounter = 0;

  let _postsData = [];

  const getPosts = () => _postsData;

  const addPost = text => {
    _postsData.push({
      text: text,
      id: `p${_postsIdCounter + 1}`,
      comments: [],
    });
    _postsIdCounter += 1;
  };

  const removePost = id => {
    const toRemoveIdx = _postsData.findIndex(post => post.id === id);
    if (toRemoveIdx === -1) {
      return;
    }
    return _postsData.splice(toRemoveIdx, 1);
  };

  const addComment = (postId, text) => {
    const postIdx = _postsData.findIndex(post => post.id === postId);
    if (postIdx === -1) {
      return;
    }
    _postsData[postIdx].comments.push({
      text: text,
      id: `c${_commentsIdCounter + 1}`,
    });
    _commentsIdCounter += 1;
  };

  const removeComment = (postId, commentId) => {
    const postIdx = _postsData.findIndex(post => post.id === postId);
    if (postIdx === -1) {
      return;
    }
    const commentIdx = _postsData[postIdx].comments.findIndex(
      comment => comment.id === commentId
    );
    if (commentIdx === -1) {
      return;
    }
    return _postsData[postIdx].comments.splice(commentIdx, 1);
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
}
