function Posts() {
  let _postsIdCounter = 3 - 1; //TODO: change to 0
  let _commentsIdCounter = 7 - 1; //TODO: change to 0

  let _postsData = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

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
      console.log(`There is no post with id of ${id}`);
      return;
    }
    return _postsData.splice(toRemoveIdx, 1);
  };

  return {
    getPosts,
    addPost,
    removePost,
  };
}
