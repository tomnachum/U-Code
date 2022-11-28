$("button").click(function () {
  $("#blogs").append(`<div class="blog">I'm a blog</div>`);
});

$("#blogs").on("click", ".blog", function () {
  $($(this)).text("blargh");
});
