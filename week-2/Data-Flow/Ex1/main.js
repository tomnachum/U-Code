let posts = [
  { name: "p1", text: "This is post 1" },
  { name: "p2", text: "This is post 2" },
  { name: "p3", text: "This is post 3" },
];

function render() {
  $("#posts").empty();
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    $("#posts").append(
      `<div id="post" data-idx="${i}"><strong>${post.name}</strong>: ${post.text}</div>`
    );
  }
  $("#name").val("");
  $("#text").val("");
  console.log(posts);
}

$("button").click(function () {
  const name = $("#name").val();
  const text = $("#text").val();
  posts.push({ name: name, text: text });
  render();
});

//Extension
$("#posts").on("click", "#post", function () {
  posts.splice($(this).data().idx, 1);
  render();
});
