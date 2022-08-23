const tweeter = Tweeter();
const renderer = Renderer();

const posts = tweeter.getPosts();
renderer.renderPosts(posts);
