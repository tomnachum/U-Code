$("body").append(`<input placeholder="Human Name">`);
$("body").append(`<button>Add Human</button>`);

$("body").on("click", "button", function () {
  const input = $("input").val();
  $("ul").append(`<li>${input}</li>`);
  $("input").val("");
});

$("ul").on("click", "li", function () {
  $(this).remove();
});
