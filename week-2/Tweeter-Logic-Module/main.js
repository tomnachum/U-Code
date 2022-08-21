function Tweeter() {
  //   let _postsIdCounter = 3 - 1;
  //   let _commentsIdCounter = 7 - 1;

  //   let _postsData = [
  //     {
  //       text: "First post!",
  //       id: "p1",
  //       comments: [
  //         { id: "c1", text: "First comment on first post!" },
  //         { id: "c2", text: "Second comment on first post!!" },
  //         { id: "c3", text: "Third comment on first post!!!" },
  //       ],
  //     },
  //     {
  //       text: "Aw man, I wanted to be first",
  //       id: "p2",
  //       comments: [
  //         {
  //           id: "c4",
  //           text: "Don't wory second poster, you'll be first one day.",
  //         },
  //         { id: "c5", text: "Yeah, believe in yourself!" },
  //         { id: "c6", text: "Haha second place what a joke." },
  //       ],
  //     },
  //   ];

  let _postsIdCounter = 0;
  let _commentsIdCounter = 0;

  let _postsData = [];

  const getPosts = () => _postsData;

  const addPost = (text) => {
    _postsData[_postsIdCounter] = {
      text: text,
      id: `p${_postsIdCounter + 1}`,
      comments: [],
    };
    _postsIdCounter += 1;
  };

  const removePost = (id) => {
    const toRemoveIdx = _postsData.findIndex((post) => post.id === id);
    if (toRemoveIdx === -1) {
      return;
    }
    return _postsData.splice(toRemoveIdx, 1);
  };

  const addComment = (postId, text) => {
    const postIdx = _postsData.findIndex((post) => post.id === postId);
    if (postIdx === -1) {
      return;
    }
    _postsData[postIdx].comments.push({
      text: text,
      id: `c${_commentsIdCounter}`,
    });
    _commentsIdCounter += 1;
  };

  const removeComment = (postId, commentId) => {
    const postIdx = _postsData.findIndex((post) => post.id === postId);
    if (postIdx === -1) {
      return;
    }
    const commentIdx = _postsData[postIdx].comments.findIndex(
      (comment) => comment.id === commentId
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
