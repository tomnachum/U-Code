$("button").click(function () {
  $("#blogs").append(`<div class="blog">I'm a blog</div>`);
});

$("#blogs").click(function () {
  $(".blog").text("blargh");
});
